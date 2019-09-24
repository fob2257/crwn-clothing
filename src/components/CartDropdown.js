import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.styles.scss';

import { toggleCartHidden } from '../redux/actions/cartActions';
import { selectCartItems } from '../redux/selectors/cartSelectors';

import CustomButton from './common/CustomButton';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : (
            <span className='empty-message'>
              Your cart is empty
            </span>
          )
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
