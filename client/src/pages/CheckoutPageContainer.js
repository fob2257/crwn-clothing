import React from 'react';
import { Query } from 'react-apollo';

import { getCartItemsAndCartTotalQuery } from '../graphql/queries';

import CheckoutPage from './CheckoutPage';

const CheckoutPageContainer = () => (
  <Query query={getCartItemsAndCartTotalQuery}>
    {
      ({ data: { cartItems, cartTotal } }) =>
        <CheckoutPage cartItems={cartItems} total={cartTotal} />
    }
  </Query>
);

export default CheckoutPageContainer;

