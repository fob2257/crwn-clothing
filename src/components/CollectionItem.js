import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.styles.scss';

import { addCartItem } from '../redux/actions/cartActions';

import CustomButton from './common/CustomButton';

const CollectionItem = ({ item, addCartItem }) => {
  const {
    id,
    name,
    imageUrl,
    price,
  } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton
        onClick={() => addCartItem(item)}
        inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
