const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const stripe = require('./stripe');

const session = require('express-session');

const MemoryStore = require('memorystore')(session);

const products = {
  monthly: 'price_1Mg8IcFViEYBQjBWxnCHcdaN',
  yearly: 'price_1Mg8KVFViEYBQjBWKwJCdrX2',
};

app.use(
  session({
    sevenUninitialized: false,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000,
    }),
    resave: false,
    secret: 'this is secret',
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('html', require('ejs').renderFile);

app.get('/', async function (req, res, next) {
  res.status(200).render('login.ejs');
});

app.post('/login', async (req, res) => {
  const { email } = req.body;
  const customer = await stripe.addNewCustomer(email);
  req.session.customerID = customer;

  req.session.email = email;

  console.log(customer);

  res.redirect('/account');
});

app.get('/account', async function (req, res) {
  res.render('account.ejs');
});

app.post('/checkout', async (req, res) => {
  let product;
  if (req.body.product === 'monthly') {
    product = products.monthly;
  } else if (req.body.product === 'yearly') {
    product = products.yearly;
  }
  const { customer } = req.session;
  const session = await stripe.createCheckoutSession(customer, product);
  res.json({ sessionId: session.id });
  console.log(session);
});

app.get('/success', (req, res) => {
  res.send('Successed');
});

app.get('/failed', (req, res) => {
  res.send('Failed');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
