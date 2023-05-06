const router = require('express').Router();
const { CodeSchema } = require('../models/code');

router.post('/', async (req, res) => {
  const { code } = req.body;
  const newCode = new CodeSchema({
    code,
  });
  await newCode.save();
  res.send(newCode);
});

router.get('/', async (req, res) => {
  const lastCode = await CodeSchema.findOne().sort({ date: -1 }).limit(1);
  res.send(lastCode);
});
module.exports = router;
