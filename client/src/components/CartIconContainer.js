import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import { getItemsCountQuery } from '../graphql/queries';
import { toggleCartHiddenMutation } from '../graphql/mutations';

import CartIcon from './CartIcon';

const CartIconContainer = ({ data: { itemsCount }, toggleCartHidden }) => (
  <CartIcon itemsCount={itemsCount} toggleCartHidden={toggleCartHidden} />
);

export default compose(
  graphql(getItemsCountQuery),
  graphql(toggleCartHiddenMutation, { name: 'toggleCartHidden' }),
)(CartIconContainer);
