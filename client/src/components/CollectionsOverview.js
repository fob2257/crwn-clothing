import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

import { selectShopCollectionsForPreview } from '../redux/selectors/shopSelectors';

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

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
