const mongoose = require('mongoose');

const SectionCode = new mongoose.Schema({
  sectionName: { type: String, required: true },
  sectionHTML: { type: String, required: true },
  sectionCSS: { type: String, required: true },
  sectionAnimations: { type: String },
});

module.exports = {
  SectionCode,
};
