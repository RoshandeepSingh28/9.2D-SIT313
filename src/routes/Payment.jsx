import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51QGRkyJcZtl0R7BC7zQ3eLurgt17eiAOsbTKE7dr61CvJ8jDik3zz3Czy5oxzqVGoPRSTRdTWH3JWGttSYMfKxpm00UgtmOPYp');

const Payment = () => {
  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 5000 }), // Amount in paise (5000 paise = ₹50)
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmPayment({
      elements: [],
      confirmParams: {
        return_url: 'https://your-website.com/payment-success', // URL to redirect after payment
      },
    });

    if (result.error) {
      console.error('Payment successful:'); // Show error message
    } else {
      console.log('Payment successful:', result);
      // Redirect or show success message
    }
  };

  useEffect(() => {
    handlePayment();
  }, []);

  return (
    <div>
      <h1>Processing Payment...</h1>
    </div>
  );
};

export default Payment;