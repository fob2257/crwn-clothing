import React from 'react';
import { connect } from 'react-redux';

import './CartItem.styles.scss';

import { clearItemFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item, clearItemFromCart }) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
  } = item;

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(item)}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
