import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckoutPage.styles.scss';

import { selectCartItems, selectCartTotal } from '../redux/selectors/cartSelectors';

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
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
