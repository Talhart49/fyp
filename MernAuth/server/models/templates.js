const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  TemplateName: { type: String, required: true },
  TemplateCode: { type: String, required: true },
  TemplateAuthor: { type: String, required: true },
  TemplateDocument: { type: String },
  TemplateRating: { type: String, required: true, default: 0 },
  TemplateTags: { type: String, required: true, default: 'none' },
});

const TemplateSchema = mongoose.model('TemplateSchema', templateSchema);

module.exports = {
  TemplateSchema,
};
