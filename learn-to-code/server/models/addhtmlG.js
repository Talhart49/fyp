const mongoose = require('mongoose');

const AddHTMLSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  attributeNames: { type: String, required: true },
  attributeExplanation: { type: String, required: true },
  example: { type: String, required: true },
});

const HTMLSchema = mongoose.model('AddHTMLSchema', AddHTMLSchema);

module.exports = { HTMLSchema };
