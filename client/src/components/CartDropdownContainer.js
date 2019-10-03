import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { getCartItemsQuery } from '../graphql/queries';
import { toggleCartHiddenMutation } from '../graphql/mutations';

import CartDropdown from './CartDropdown';

const CartDropdownContainer = () => (
  <Mutation mutation={toggleCartHiddenMutation}>
    {
      toggleCartHidden => (
        <Query query={getCartItemsQuery}>
          {
            ({ data: { cartItems } }) =>
              <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
          }
        </Query>
      )
    }
  </Mutation>
);

export default CartDropdownContainer;
