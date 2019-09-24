import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { default as stripeConfig } from './stripe.config.json';

const StripeButton = ({ price }) => {
  const priceCents = price * 100;

  const onToken = (token) => {
    console.log(token);
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
