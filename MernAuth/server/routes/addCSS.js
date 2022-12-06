const router = require('express').Router();
const { CSSSchema } = require('../models/addCSSG');

router.post('/', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const newCSS = new CSSSchema({
      title,
      content,
      attributeNames,
      attributeExplanation,
      example,
    });
    const savedCSS = await newCSS.save();
    res.status(200).send({ message: 'Added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.put('/update/:title', async (req, res) => {
  try {
    const { title, content, attributeNames, attributeExplanation, example } =
      req.body;
    const css = await CSSSchema.findOneAndUpdate(
      { title: req.params.title },
      { title, content, attributeNames, attributeExplanation, example }
    );
    res.status(200).send({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
