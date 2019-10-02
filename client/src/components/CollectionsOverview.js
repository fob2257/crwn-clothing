import React from 'react';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

import CollectionPreview from './CollectionPreview';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(item =>
        <CollectionPreview key={item.id} {...item} />
      )
    }
  </CollectionsOverviewContainer>
);

export default CollectionsOverview;
