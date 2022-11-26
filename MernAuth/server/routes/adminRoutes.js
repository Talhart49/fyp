const router = require('express').Router();
const { User, validate } = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/block/:email', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { block: req.body.block }
    );
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send({ message: 'User blocked' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
