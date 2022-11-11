const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: 'User with email already exists' });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/edit', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(409)
        .send({ message: 'User with email does not exist' });
    }

    user.fullName = req.body.fullName;
    user.phone = req.body.phone;
    user.email = req.body.email;

    await user.save();
    res.status(201).send({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});
router.post('/changePassword/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res
        .status(409)
        .send({ message: 'User with email does not exist' });
    }

    const oldPassword = req.body.oldPassword;
    const newPassword = user.password;
    console.log(oldPassword);
    console.log(newPassword);
    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid Password' });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt);
    user.password = hashPassword;
    await user.save();
    res.status(201).send({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post('/editDP', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    user.dp = req.body.dp;
    await user.save();
    res.status(200).send({ message: 'Profile picture updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
