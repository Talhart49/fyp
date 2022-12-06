const router = require('express').Router();
const { CSSSchema } = require('../models/addCSSG');

router.get('/', async (req, res) => {
  try {
    const css = await CSSSchema.find();
    res.status(200).send(css);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.delete('/:title', async (req, res) => {
  try {
    const css = await CSSSchema.findOneAndDelete({ title: req.params.title });
    // const css = await CSSSchema.findOneAndDelete(req.params.title);
    res.status(200).send(css);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/:title', async (req, res) => {
  try {
    const css = await CSSSchema.findOne({ title: req.params.title });
    res.status(200).send(css);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/title', async (req, res) => {
  try {
    const css = await CSSSchema.find();
    res.status(200).send(css.map((css) => css.title));
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/:title', async (req, res) => {
  try {
    console.log('Request receiveed');
    const css = await CSSSchema.findOne({ title: req.params.title });
    res.status(200).send(css);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
