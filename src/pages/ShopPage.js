import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fireStore, mapCollectionsSnapshot } from '../firebase/firebase.util';

import { updateCollections } from '../redux/actions/shopActions';

import WithSpinner from '../components/common/WithSpinner';
import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = fireStore.collection('collections');

    collectionRef.onSnapshot(async snapShot => {
      const res = mapCollectionsSnapshot(snapShot);

      updateCollections(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) =>
        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) =>
        <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
