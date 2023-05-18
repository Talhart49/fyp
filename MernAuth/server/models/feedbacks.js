const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  Template: { type: String, required: true },
  feedback: { type: String, default: 'No feedback' },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  feedbackResponse: { type: String, default: 'No response' },
});

const FeedbackSchema = mongoose.model('FeedbackSchema', feedbackSchema);

module.exports = {
  FeedbackSchema,
};
