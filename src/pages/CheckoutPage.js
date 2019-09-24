import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckoutPage.styles.scss';

import { selectCartItems, selectCartTotal } from '../redux/selectors/cartSelectors';

import StripeButton from '../components/common/StripeButton';
import CheckoutItem from '../components/CheckoutItem';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      {
        ['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((title, i) => (
          <div key={i} className='header-block'>
            <span>{title}</span>
          </div>
        ))
      }
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    }
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
