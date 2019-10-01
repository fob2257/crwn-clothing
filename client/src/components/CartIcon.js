import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartContainer, ShoppingIcon, ItemCountContainer } from './CartIcon.styles';
// import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import { toggleCartHidden } from '../redux/actions/cartActions';
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

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
