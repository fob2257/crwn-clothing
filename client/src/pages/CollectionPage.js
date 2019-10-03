import React from 'react';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';

import CollectionItemContainer from '../components/CollectionItemContainer';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>
      {title}
    </CollectionTitle>
    <CollectionItemsContainer>
      {
        items.map(item =>
          <CollectionItemContainer key={item.id} item={item} />
        )
      }
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

export default CollectionPage;
