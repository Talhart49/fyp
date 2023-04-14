const mongoose = require('mongoose');

const UserTemplate = new mongoose.Schema({
  authorName: { type: String, required: true },
  templateName: { type: String, required: true },
  templateDescription: {
    type: String,
    required: true,
    default: 'No description',
  },
  templateCode: { type: String, required: true },
  templateStatus: { type: String, required: true, default: 'private' },
  dateCreated: { type: Date, default: Date.now },
  Count: { type: Number, default: 0 },
});

const TemplateSchema = mongoose.model('UserTemplate', UserTemplate);

module.exports = { TemplateSchema };
