import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

import CheckoutForm from '../../parts/CheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51Mf72sFViEYBQjBWDwEiRx2g9dX7V9GhWVLIIITY0RSA4uTeSBTrhZgLOyPMASUJFcASYwb5JOCtDSmuoQ4aEXUc00HquJHmET'
);

export default function CardPayment() {
  const planType = localStorage.getItem('planType');
  console.log(planType);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchyear = () => {
      const res = axios
        .post('http://localhost:8080/api/stripe/create-payment-intent-y')
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    };

    // Create PaymentIntent as soon as the page loads
    const fetchmonth = () => {
      const res = axios
        .post('http://localhost:8080/api/stripe/create-payment-intent-m')
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    };

    if (planType === 'yearly') {
      fetchyear();
    } else if (planType === 'Monthly') {
      fetchmonth();
    }
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='App'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
