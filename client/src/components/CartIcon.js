import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartContainer, ShoppingIcon, ItemCountContainer } from './CartIcon.styles';

import { selectCartItemsCount } from '../redux/selectors/cartSelectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
