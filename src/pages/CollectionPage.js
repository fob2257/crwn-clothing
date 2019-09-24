import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.styles.scss';

import { selectShopCollection } from '../redux/selectors/shopSelectors';

import CollectionItem from '../components/CollectionItem';

const CollectionPage = ({ collection: { title, items, routeName } }) => (
  <div className='collection-page'>
    <h2 className='title'>
      {title}
    </h2>
    <div className='items'>
      {
        items.map(item =>
          <CollectionItem key={item.id} item={item} />
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId.toLowerCase().trim())(state),
});

export default connect(mapStateToProps)(CollectionPage);
