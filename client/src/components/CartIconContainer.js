import React from 'react';
import { Mutation } from 'react-apollo';

import { toggleCartHiddenMutation } from '../graphql/mutations';

import CartIcon from './CartIcon';

const CartIconContainer = () => (
  <Mutation mutation={toggleCartHiddenMutation}>
    {
      toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />
    }
  </Mutation>
);

export default CartIconContainer;
