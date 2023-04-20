const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const { otp } = require('../models/otp');
const nodemailer = require('nodemailer');

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

router.post('/resetPassword/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res
        .status(409)
        .send({ message: 'User with email does not exist' });
    }
    const newPassword = user.password;
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

router.post('/email-send/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res
        .status(404)
        .send({ message: `user not found ${req.body.email}` });
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    const otpData = await new otp({
      email: req.params.email,
      code: otpCode,
      expireIn: Date.now() + 300000,
    }).save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    function sendMail() {
      const mailOptions = {
        from: process.env.EMAIL,
        to: req.params.email,
        subject: 'OTP for password reset',
        text: `Your OTP is ${otpCode}`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
    sendMail();
    res.status(200).send({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/match-otp/:otp/:email', async (req, res) => {
  try {
    const otpData = await otp.findOne({ email: req.params.email });
    if (!otpData) {
      return res.status(404).send({ message: 'OTP not found' });
    }
    if (otpData.code !== req.params.otp) {
      return res.status(401).send({
        message: `Invalid OTP ${req.params.otp} + ${otpData.code}`,
      });
    }
    if (otpData.expireIn < Date.now()) {
      console.log(otpData.expireIn);
      return res.status(401).send({ message: 'OTP expired' });
    }
    res.status(200).send({ message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/get-user/:email', async (req, res) => {
  try {
    const name = await User.findOne({ email: req.params.email });
    res.status(200).send({ message: 'User found', name: name.fullName });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
