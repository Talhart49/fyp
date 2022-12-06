const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  Template: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const TemplateSchema = mongoose.model('TemplateSchema', templateSchema);

module.exports = {
  TemplateSchema,
};
