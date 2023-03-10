const stripe = require('stripe');

const STRIPE_SECRET_KEY =
  'sk_test_51Mf72sFViEYBQjBW57GV5OsupTWZSDjAdvbHcp9hjhyz54wM58i0krE6cOKm7Lx4lvlBV4hVaTVeCooO87gilL46007Z3gpt0p';

const Stripe = stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const addNewCustomer = async (email) => {
  const customer = await Stripe.customers.create({
    email,
    description: 'New Customer',
  });
  return customer;
};

const createCheckoutSession = async (customer, price) => {
  console.log(price);
  const session = await Stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],

    mode: 'subscription',
    customer,
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/failed ',
  });
  return session;
};

module.exports = { addNewCustomer, createCheckoutSession };
