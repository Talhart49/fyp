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

module.exports = router;
