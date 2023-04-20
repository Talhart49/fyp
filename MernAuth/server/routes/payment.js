const router = require('express').Router();
const { paymentSchema } = require('../models/paymentData');

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const payment = new paymentSchema({
      email: data.email,
      name: data.name,
      price: data.price,
    });
    await payment.save();
    res.status(201).json({ message: 'Payment data saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'heheh' });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await paymentSchema.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'heheh' });
  }
});

module.exports = router;
