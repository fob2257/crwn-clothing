import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItem.styles';

const CartItem = ({ item }) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
  } = item;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
