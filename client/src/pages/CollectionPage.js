import React from 'react';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';

import CollectionItem from '../components/CollectionItem';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>
      {title}
    </CollectionTitle>
    <CollectionItemsContainer>
      {
        items.map(item =>
          <CollectionItem key={item.id} item={item} />
        )
      }
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

export default CollectionPage;
