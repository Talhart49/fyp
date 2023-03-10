const router = require('express').Router();

// This is your test secret API key.
const stripe = require('stripe')(
  'sk_test_51Mf72sFViEYBQjBW57GV5OsupTWZSDjAdvbHcp9hjhyz54wM58i0krE6cOKm7Lx4lvlBV4hVaTVeCooO87gilL46007Z3gpt0p'
);

router.post('/create-payment-intent-m', async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

router.post('/create-payment-intent-y', async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 6000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
