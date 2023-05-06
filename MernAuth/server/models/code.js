const mongoose = require('mongoose');

const WebsiteCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const CodeSchema = mongoose.model('WebsiteCodeSchema', WebsiteCodeSchema);

module.exports = { CodeSchema };
