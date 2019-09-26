import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../redux/actions/shopActions';
import { selectShopIsFetching, selectShopCollectionsLoaded } from '../redux/selectors/shopSelectors';

import WithSpinner from '../components/common/WithSpinner';
import CollectionsOverview from '../components/CollectionsOverview';
import CollectionPage from './CollectionPage';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, loading, collectionsLoaded, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) =>
        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) =>
        <CollectionPageWithSpinner isLoading={!collectionsLoaded} {...props} />} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectShopIsFetching,
  collectionsLoaded: selectShopCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
