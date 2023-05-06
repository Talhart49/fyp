const router = require('express').Router();

const fs = require('fs');

const puppeteer = require('puppeteer');

const { TemplateSchema } = require('../models/usersTemplate');

router.post('/', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options = {
      path: 'example.jpg',
      omitBackground: true,
    };
    await page.setViewport({ width: 1920, height: 1000 });

    // Navigate to the URL with parameters
    await page.goto('http://localhost:3000/display');

    // Wait for 2 seconds to allow the page to render

    await page.screenshot(options);
    await browser.close();

    const screenshotData = fs.readFileSync('example.jpg', 'base64');

    const template = await new TemplateSchema({
      ...req.body,
      image: screenshotData,
    }).save();
    fs.unlinkSync('example.jpg');

    res.status(201).send({ message: 'Template created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating template' });
  }
});

router.get('/:email', async (req, res) => {
  try {
    const template = await TemplateSchema.find({
      authorEmail: req.params.email,
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

router.post('/takeScreenshot', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req.body.url);
  await page.screenshot({ path: 'example.png' });
  await browser.close();
  const screenshot = fs.readFileSync('example.png', 'base64');

  //convert screenshot to base64
});

module.exports = router;
