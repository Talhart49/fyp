const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, default: 'Normal' },
  block: { type: String, default: '0' },
  image: { type: String },
  firstTemplate: { type: Date },
  totalTemplates: { type: Number, default: 0 },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: '7d',
  });
  return token;
};

const User = mongoose.model('user', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().label('Full Name'),
    phone: Joi.string().required().label('phone'),
    email: Joi.string().required().label('Email'),
    password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
