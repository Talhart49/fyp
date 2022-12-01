const mongoose = require('mongoose');

const AddJSSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  attributeNames: { type: String, required: true },
  attributeExplanation: { type: String, required: true },
  example: { type: String, required: true },
});

const JSSchema = mongoose.model('AddJSSchema', AddJSSchema);

module.exports = { JSSchema };
