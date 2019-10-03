import React from 'react';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutPage.styles';

import StripeButton from '../components/common/StripeButton';
import CheckoutItemContainer from '../components/CheckoutItemContainer';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      {
        ['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((title, i) => (
          <HeaderBlockContainer key={i}>
            <span>{title}</span>
          </HeaderBlockContainer>
        ))
      }
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem => <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />)
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

export default CheckoutPage;
