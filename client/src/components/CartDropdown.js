import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdown.styles';

// import CustomButton from './common/CustomButton';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : (
            <EmptyMessageContainer>
              Your cart is empty
            </EmptyMessageContainer>
          )
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
    }}>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

export default withRouter(CartDropdown);
