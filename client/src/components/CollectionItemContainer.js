import React from 'react';
import { Mutation } from 'react-apollo';

import { addItemToCartMutation } from '../graphql/mutations';

import CollectionItem from './CollectionItem';

const CollectionItemContainer = (props) => (
  <Mutation mutation={addItemToCartMutation}>
    {
      addItemToCart =>
        <CollectionItem
          {...props}
          addCartItem={item => addItemToCart({ variables: { item } })} />
    }
  </Mutation>
);

export default CollectionItemContainer;
