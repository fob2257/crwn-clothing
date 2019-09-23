import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import { toggleCartHidden } from '../redux/actions/cartAction';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({
  cart: { cartItems },
}) => ({ cartItems });

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
