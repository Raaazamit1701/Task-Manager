const mongoose = require('mongoose');
const dataDatabase = mongoose.createConnection(process.env.MONGO_URL);
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true, // e.g., cron format like '*/5 * * * *'
  },
  status: {
    type: String,
    enum: ['pending', 'running', 'completed'],
    default: 'pending',
  },
  deadline: { 
    type: String ,
    require : true,
  },
});

module.exports = dataDatabase.model('Task', taskSchema);
