const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('common'));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

const stripeCharge = (body = {}) =>
  new Promise((resolve, reject) => {
    stripe.charges.create(body, (error, charge) => {
      if (error) {
        return reject(error);
      }

      resolve(charge);
    });
  });

app.post('/payment', async (req, res) => {
  try {
    const {
      amount,
      currency = 'usd',
      token: { id: source },
    } = req.body;

    const charge = await stripeCharge({ source, amount, currency });

    res.status(200).send(charge);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`crwn-clothing-server listening on port ${port}`);
});
