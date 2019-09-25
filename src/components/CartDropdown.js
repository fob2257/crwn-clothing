import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer } from './CartDropdown.styles';

import { toggleCartHidden } from '../redux/actions/cartActions';
import { selectCartItems } from '../redux/selectors/cartSelectors';

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
