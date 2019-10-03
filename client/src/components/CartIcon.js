import React from 'react';

import { CartContainer, ShoppingIcon, ItemCountContainer } from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
