import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionsOverview.styles.scss';

import { selectShopCollectionsForPreview } from '../redux/selectors/shopSelectors';

import CollectionPreview from './CollectionPreview';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(item =>
        <CollectionPreview key={item.id} {...item} />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
