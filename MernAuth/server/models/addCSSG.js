const mongoose = require('mongoose');

const AddCSSSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  attributeNames: { type: String, required: true },
  attributeExplanation: { type: String, required: true },
  example: { type: String, required: true },
});

const CSSSchema = mongoose.model('AddCSSSchema', AddCSSSchema);

module.exports = { CSSSchema };
