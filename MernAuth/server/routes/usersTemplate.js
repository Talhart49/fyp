const router = require('express').Router();
const { TemplateSchema } = require('../models/usersTemplate');

router.post('/', async (req, res) => {
  try {
    const template = await new TemplateSchema(req.body).save();
    res.status(201).send({ message: 'Template created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating template' });
  }
});

router.get('/:name', async (req, res) => {
  try {
    const template = await TemplateSchema.find({
      authorName: req.params.name,
    });
    res.status(200).send(template);
  } catch (error) {
    res.status(500).send({ message: 'Error getting template' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    await TemplateSchema.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(200).send({ message: 'Template updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating template' });
  }
});

router.get('/', async (req, res) => {
  try {
    const template = await TemplateSchema.find({
      templateStatus: 'public',
    });
    res.status(200).send(template);
  } catch (error) {
    res.status(500).send({ message: 'Error getting template' });
  }
});

module.exports = router;
