const router = require('express').Router();
const { HTMLSchema } = require('../models/addhtmlG');

router.get('/', async (req, res) => {
  try {
    const html = await HTMLSchema.find();
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/:title', async (req, res) => {
  try {
    const html = await HTMLSchema.findOne({ title: req.params.title });
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
