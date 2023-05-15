import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './index.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [data, setData] = useState();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('planType'));
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const error = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/dashboard/MainContent', // Make sure to change this to your payment completion page
        // Make sure to change this to your payment completion page

        fetch_data_from_email: axios
          .get(
            `http://localhost:8080/api/auth/${localStorage.getItem('email')}`
          )
          .then((res) => {
            axios
              .post('http://localhost:8080/api/payment', {
                email: res.data.email,
                name: res.data.fullName,
                price: localStorage.getItem('planType') === 'Monthly' ? 10 : 60,
              })
              .then((res) => {
                axios.put('http://localhost:8080/api/users/setStatus', {
                  email: localStorage.getItem('email'),
                  status:
                    localStorage.getItem('planType') === 'Monthly'
                      ? 'Pro'
                      : 'Premium',
                });

                console.log(res);
              });

            setData(res.data);
          }),
        // set_payment_data: axios.post('http://localhost:8080/api/stripe', {
        //   email: data.email,
        //   name: data.name,
        //   price: localStorage.getItem('planType') === 'm' ? 10 : 60,
        // }),
      },
    });
    console.log(error);

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);

    // payment_confirmed();
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className='CheckoutForm'>
      <form id='payment-form' className='payment-form' onSubmit={handleSubmit}>
        {/* <LinkAuthenticationElement
          id='link-authentication-element'
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
        /> */}
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <button
          onClick={() => {}}
          disabled={isLoading || !stripe || !elements}
          id='submit'
          className='payment_button'>
          <span id='button-text'>
            {isLoading ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              'Pay now'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
}
