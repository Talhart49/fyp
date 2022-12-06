const router = require('express').Router();
const { JSSchema } = require('../models/addJSG');

router.post('/', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const newJS = new JSSchema({
      title,
      content,
      attributeNames,
      attributeExplanation,
      example,
    });
    const savedJS = await newJS.save();
    res.status(200).send({ message: 'Added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.put('/update/:title', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const html = await JSSchema.findOneAndUpdate(
      { title: req.params.title },
      { title, content, attributeNames, attributeExplanation, example }
    );
    res.status(200).send({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
