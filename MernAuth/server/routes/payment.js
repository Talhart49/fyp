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

router.get('/Revenue', async (req, res) => {
  try {
    const data = await paymentSchema.find({
      date: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    }); // add all the price
    let total = 0;
    data.forEach((item) => {
      total += parseInt(item.price);
    });
    res.status(200).json({ total, data });
  } catch (err) {
    res.status(500).json({ message: 'heheh' });
  }
});

router.get('/Revenue/monthVise', async (req, res) => {
  try {
    const data = await paymentSchema.find({});
    let total = 0;
    data.forEach((item) => {
      total += parseInt(item.price);
    });
    const revenueByMonth = await paymentSchema.aggregate([
      {
        $addFields: {
          convertedPrice: { $toDouble: '$price' }, // Convert the "price" field to a double
        },
      },
      {
        $group: {
          _id: { $month: '$date' }, // Group by month of the "date" field
          revenue: { $sum: '$convertedPrice' }, // Calculate the sum of the converted "price" field
        },
      },
      {
        $addFields: {
          monthName: {
            $let: {
              vars: {
                monthsInString: [
                  '',
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              in: { $arrayElemAt: ['$$monthsInString', '$_id'] },
            },
          },
        },
      },
      {
        $sort: { _id: 1 }, // Sort the results by month in ascending order
      },
    ]);

    res.json({ revenueByMonth, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/recent', async (req, res) => {
  try {
    const data = await paymentSchema.find().sort({ date: -1 }).limit(3);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
