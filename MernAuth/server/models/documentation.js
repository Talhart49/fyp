const mongoose = require('mongoose');

const HTMLdocumentaionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true },
  sectionHTML: { type: String, required: true },
  HTMLexplanation: { type: String, required: true },
});

const HTMLdocumentSchema = mongoose.model(
  'HTMLdocumentaionSchema',
  HTMLdocumentaionSchema
);

const CSSdocumentaionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true },
  sectionCSS: { type: String, required: true },
  CSSexplanation: { type: String, required: true },
});

const CssdocumentSchema = mongoose.model(
  'CSSdocumentaionSchema',
  CSSdocumentaionSchema
);

const AnimationsdocumentaionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true },
  sectionAnimation: { type: String, required: true },
  Animationexplanation: { type: String, required: true },
});

const AnimationdocumentSchema = mongoose.model(
  'AnimationsdocumentaionSchema',
  AnimationsdocumentaionSchema
);

module.exports = {
  HTMLdocumentSchema,
  CssdocumentSchema,
  AnimationdocumentSchema,
};
