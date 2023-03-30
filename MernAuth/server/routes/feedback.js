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

module.exports = router;
