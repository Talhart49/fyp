const mongoose = require('mongoose');

const payment = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

const paymentSchema = mongoose.model('payment', payment);

module.exports = { paymentSchema };
