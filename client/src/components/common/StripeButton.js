import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { default as stripeConfig } from '../../stripe.config.json';

const StripeButton = ({ price }) => {
  const priceCents = price * 100;

  const onToken = async (token) => {
    try {
      // console.log(token);
      const res = await axios.post('payment', { token, amount: priceCents });

      console.log(res);
      alert('Payment successful');
    } catch (error) {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment');
    }
  };

  return (
    <StripeCheckout
      label='Pay Now'
      image='https://svgshare.com/i/CUz.svg'
      name='CRWN Clothing Ltd.'
      description={`Your total is $${price}`}
      amount={priceCents}
      panelLabel='Pay Now'
      billingAddress
      shippingAddress
      token={onToken}
      stripeKey={stripeConfig && stripeConfig.publishableKey}
    />
  );
};

export default StripeButton;
