import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import {
  addItemToCartMutation,
  removeItemFromCartMutation,
  clearItemFromCartMutation,
} from '../graphql/mutations';

import CheckoutItem from './CheckoutItem';

const CheckoutItemContainer = ({
  addCartItem,
  removeCartItem,
  clearItemFromCart,
  ...props,
}) => (
    <CheckoutItem
      {...props}
      addCartItem={item => addCartItem({ variables: { item } })}
      removeCartItem={item => removeCartItem({ variables: { item } })}
      clearItemFromCart={item => clearItemFromCart({ variables: { item } })} />
  );

export default compose(
  graphql(addItemToCartMutation, { name: 'addCartItem' }),
  graphql(removeItemFromCartMutation, { name: 'removeCartItem' }),
  graphql(clearItemFromCartMutation, { name: 'clearItemFromCart' }),
)(CheckoutItemContainer);
