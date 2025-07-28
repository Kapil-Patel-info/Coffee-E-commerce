const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

// Correct model name: 'Feedback'
// Correct schema passed: feedbackSchema
module.exports = mongoose.model('Feedback', feedbackSchema);
