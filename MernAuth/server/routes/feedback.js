const router = require('express').Router();
const { FeedbackSchema } = require('../models/feedbacks');

router.post('/', async (req, res) => {
  try {
    const data = await req.body;
    const feedback = new FeedbackSchema({
      userEmail: data.userEmail,
      Template: data.Template,
      rating: data.rating,
      feedback: data.feedback,
    });
    await feedback.save();
    res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:Template', async (req, res) => {
  try {
    const feedbacks = await FeedbackSchema.find({
      Template: req.params.Template,
    });
    const total = feedbacks.length;
    const stars = feedbacks.reduce((acc, curr) => acc + curr.rating, 0);
    const average = stars / total;
    res.status(200).json({ average });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await FeedbackSchema.find();
    res.status(200).json({ feedbacks });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.get('/feedbacks/:email', async (req, res) => {
  try {
    const feedbacks = await FeedbackSchema.find({
      userEmail: req.params.email,
    });
    res.status(200).json({ feedbacks });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const feedback = await FeedbackSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ message: 'Feedback updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await FeedbackSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.put('response/:id', async (req, res) => {
  try {
    const feedback = await FeedbackSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ message: 'Feedback updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

router.get('/response/:id', async (req, res) => {
  try {
    const feedback = await FeedbackSchema.findById(req.params.id);
    res.status(200).json({ feedback });
  } catch (err) {
    res.status(500).json({ message: 'fff' });
  }
});

module.exports = router;
