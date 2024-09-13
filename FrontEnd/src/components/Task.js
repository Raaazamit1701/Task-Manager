import React, { useEffect, useState, useMemo } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./styles/task.css";
import Aos from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const Task = ({ toast, tasks, setTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState({
    taskName: "",
    frequency: "", // Frequency in terms of days or other format
    status: "pending", // Default status set to 'pending'
    deadline: "", // Date to complete the task by
  });

  // Fetch tasks from the API when component is mounted
  useEffect(() => {
    Aos.init({ duration: 1000 });
    axios
      .get(`https://task-manager-axhd.onrender.com/getTask`)
      .then((res) => {
        let completed = res.data.filter((obj) => obj.status === "completed");
        setTasks(res.data);
        setCompletedTasks(completed);
      })
      .catch((err) => console.log(err));
  }, [task]);

  // Handle changes in the task input fields
  const handleOnchange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new task
  const addTask = (e) => {
    if (!task.taskName.trim() || !task.frequency || !task.deadline) {
      toast.error("Please enter task name, frequency, and deadline");
      return;
    }
    const selectedDate = new Date(task.deadline);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      toast.error("Please select a future date");
      return;
    }

    const newTask = {
      taskName: task.taskName,
      frequency: task.frequency,
      status: task.status,
      deadline: task.deadline,
    };

    axios
      .post(`https://task-manager-axhd.onrender.com/postTask`, newTask)
      .then((res) => {
        toast.success("Task added successfully");
        setTasks([...tasks, res.data]);
        setTask({ taskName: "", frequency: "", status: "pending", deadline: "" });
      })
      .catch((err) => console.log(err));
  };

  // Mark a task as completed


  // Remove a task

  // Filter upcoming tasks based on their status
  const upcomingTasks = tasks.filter((task) => task.status !== "completed");

  // Filter tasks by search query for displaying current tasks
  const comingFilteredItems = useMemo(() => {
    return upcomingTasks.filter((task) =>
      task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [upcomingTasks, searchQuery]);

  // Filter completed tasks by search query
  const comingCompletedItems = useMemo(() => {
    return completedTasks.filter((task) =>
      task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, completedTasks]);

  return (
    <div className="home-body-container" data-aos="zoom-in">
      <header className="search-bar">
        <h1>Tasks</h1>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search"
        />
        <button id="search-bt">
          <BiSearchAlt2 size={22} />
        </button>
      </header>
      <div className="add-div">
        <input
          type="text"
          placeholder="Enter task name"
          name="taskName"
          value={task.taskName}
          onChange={handleOnchange}
        />
        <input
          type="text"
          placeholder="Enter frequency"
          name="frequency"
          value={task.frequency}
          onChange={handleOnchange}
        />
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleOnchange}
        />
        <button id="add-bt" onClick={addTask}>
          Add
        </button>
      </div>
      <main className="task-body" data-aos="zoom-out">
        <h3>Current tasks</h3>
        <div className="cur-task-list" data-aos="zoom-in">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Frequency</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {comingFilteredItems.map((task) => (
                <tr key={task.id}>
                  <td>{task.taskName}</td>
                  <td>{task.frequency}</td>
                  <td>{task.deadline}</td>
                  <td>{task.status}</td> {/* Show task status */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Completed tasks</h3>
        <div className="completed-task" data-aos="zoom-in">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Frequency</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {comingCompletedItems.map((task) => (
                <tr key={task.id}>
                  <td>{task.taskName}</td>
                  <td>{task.frequency}</td>
                  <td>{task.deadline}</td>
                  <td>{task.status}</td> {/* Show task status */}
                  <td>
                    {/* <button id="task-remove" onClick={() => removeTask(task.id)}>
                      <AiFillDelete size={20} color="#FF6969" />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Task;
