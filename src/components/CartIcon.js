import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import { toggleCartHidden } from '../redux/actions/cartActions';
import { selectCartItemsCount } from '../redux/selectors/cartSelectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
