import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51Mf72sFViEYBQjBWDwEiRx2g9dX7V9GhWVLIIITY0RSA4uTeSBTrhZgLOyPMASUJFcASYwb5JOCtDSmuoQ4aEXUc00HquJHmET'
);
import './App.css';

function App() {
  return (
    <div className='App'>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
