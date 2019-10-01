import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';

import { selectShopCollection } from '../redux/selectors/shopSelectors';

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

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId.toLowerCase().trim())(state),
});

export default connect(mapStateToProps)(CollectionPage);
