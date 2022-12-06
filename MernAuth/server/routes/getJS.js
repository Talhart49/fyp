const router = require('express').Router();
const { JSSchema } = require('../models/addJSG');

router.get('/', async (req, res) => {
  try {
    const js = await JSSchema.find();
    res.status(200).send(js);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.delete('/:title', async (req, res) => {
  try {
    const js = await JSSchema.findOneAndDelete({ title: req.params.title });
    // const js = await JSSchema.findOneAndDelete(req.params.title);
    res.status(200).send(js);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/:title', async (req, res) => {
  try {
    const js = await JSSchema.findOne({ title: req.params.title });
    res.status(200).send(js);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/title', async (req, res) => {
  try {
    const js = await JSSchema.find();
    res.status(200).send(js.map((js) => js.title));
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/:title', async (req, res) => {
  try {
    console.log('Request receiveed');
    const js = await JSSchema.findOne({ title: req.params.title });
    res.status(200).send(js);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
