const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // This must match the model name in User.js
    required: true 
  }
});

module.exports = mongoose.model('Task', TaskSchema);