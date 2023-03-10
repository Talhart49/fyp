// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')(
  'sk_test_51Mf72sFViEYBQjBW57GV5OsupTWZSDjAdvbHcp9hjhyz54wM58i0krE6cOKm7Lx4lvlBV4hVaTVeCooO87gilL46007Z3gpt0p'
);

const customer = await stripe.customers.create({
  email: '{{CUSTOMER_EMAIL}}',
  name: '{{CUSTOMER_NAME}}',
  shipping: {
    address: {
      city: 'Brothers',
      country: 'US',
      line1: '27 Fredrick Ave',
      postal_code: '97712',
      state: 'CA',
    },
    name: '{{CUSTOMER_NAME}}',
  },
  address: {
    city: 'Brothers',
    country: 'US',
    line1: '27 Fredrick Ave',
    postal_code: '97712',
    state: 'CA',
  },
});
