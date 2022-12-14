const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.get('/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).send('User not found');
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: 'Invalid Email or Password' });

    if (user.block === '1') {
      return res.status(401).send({ message: 'Your account is blocked' });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(401).send({ message: 'Invalid Email or Password' });

    const token = user.generateAuthToken();
    res.status(200).send({
      data: token,
      message: 'logged in successfully',
      fullName: user.fullName,
      phone: user.phone,
      email: user.email,
      block: user.block,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = router;
