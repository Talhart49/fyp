const router = require('express').Router();

const fs = require('fs');

import('pageres');

// const Pageres = require('pageres');
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

router.delete('/:id', async (req, res) => {
  try {
    await TemplateSchema.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting template' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await TemplateSchema.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { Count: 1 } }
    );
    res.status(200).send({ message: 'Template updated successfullyy' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating template' });
  }
});

router.get('/t/ending', async (req, res) => {
  try {
    const template = await TemplateSchema.find({
      templateStatus: 'public',
    })
      .sort({ Count: -1 })
      .limit(3);

    res.status(200).send(template);
  } catch (error) {
    res.status(500).send({ message: 'Error getting template' });
  }
});

router.get('/s/creenshot', async (req, res) => {
  const url = req.body.url; // Assumes URL is passed as a query parameter
  const pageres = new Pageres({ delay: 2 })
    .src(url, ['1280x800'], { crop: true })
    .dest(__dirname);
  await pageres.run();
  const screenshot = fs.readFileSync(`${__dirname}/${getFileName(url)}`);
  res.setHeader('Content-Type', 'image/png');
  res.send(screenshot);
});

function getFileName(url) {
  const fileName = url.replace(/[/:.]/g, '!').replace(/^!/, '');
  return `${fileName}!1280x800.png`;
}

module.exports = router;
