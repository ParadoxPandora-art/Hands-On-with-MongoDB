const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
app.use(express.json());
connectDB();

// Create a User
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Create a Task for a User
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body); // Expects { title, userId, ... }
  await task.save();
  res.json(task);
});

// Subtask 4.3: Populate References
app.get('/tasks', async (req, res) => {
  // .populate('userId') replaces the ID with the actual User document
  const tasks = await Task.find().populate('userId', 'name email');
  res.json(tasks);
});

app.listen(3000, () => console.log('Server running on port 3000'));