import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './CollectionItem.styles';

import { addCartItem } from '../redux/actions/cartActions';

// import CustomButton from './common/CustomButton';

const CollectionItem = ({ item, addCartItem }) => {
  const {
    name,
    imageUrl,
    price,
  } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className='image'
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
