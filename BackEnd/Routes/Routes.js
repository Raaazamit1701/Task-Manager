const express = require("express");


const ModelTask = require("../Models/Task")
const bodyParser = require('body-parser');
const cron = require('node-cron');
const router = express.Router();

router.get("/getTask", async (req, res) => {
    // const { _id } = req.user;
    // const newTask = new dataModel({
    //   _id: _id,
    // });
    // let task = await dataModel.find();
    // if (!task) task = await newTask.save();
    // console.log(task.tasks);
    // res.json(task.tasks);
    try {
      const tasks = await ModelTask.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/postTask", async (req, res) => {
    // const { _id } = req.user;
    // const newTask = req.body;
    // console.log(_id);
  
    // await dataModel
    //   .create({ _id: newTask.id}, { $push: { tasks: newTask } })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // res.json({ success: "Posted Successfully" });
    const { taskName, frequency, deadline } = req.body;
  
    try {
      // Create a new task with the deadline
      const newTask = new ModelTask({
        taskName,
        frequency,
        deadline: new Date(deadline),  // Convert the string to a Date object
      });
      
      await newTask.save();
  
      // Schedule the task using node-cron
      cron.schedule(frequency, async () => {
        console.log(`Running task: ${taskName}`);
  
        // Update the task status to 'running'
        await ModelTask.findByIdAndUpdate(newTask._id, { status: 'running' });
  
        // Simulate task completion
        setTimeout(async () => {
          await ModelTask.findByIdAndUpdate(newTask._id, { status: 'completed' });
        }, 2000); // Mock task takes 2 seconds to complete
      });
  
      res.status(201).json({ message: 'Task scheduled successfully', task: newTask });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



module.exports = router;