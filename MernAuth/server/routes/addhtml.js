const router = require('express').Router();
const { HTMLSchema } = require('../models/addhtmlG');

router.post('/', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const newHTML = new HTMLSchema({
      title,
      content,
      attributeNames,
      attributeExplanation,
      example,
    });
    const savedHTML = await newHTML.save();
    res.status(200).send({ message: 'Added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.put('/update/:title', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const html = await HTMLSchema.findOneAndUpdate(
      { title: req.params.title },
      { title, content, attributeNames, attributeExplanation, example }
    );
    res.status(200).send({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
