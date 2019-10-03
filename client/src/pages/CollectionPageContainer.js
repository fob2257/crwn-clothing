import React from 'react';
import { Query } from 'react-apollo';

import { getCollectionsByTitleQuery } from '../graphql/queries';

import WithSpinner from '../components/common/WithSpinner';
import CollectionPage from './CollectionPage';

const CollectionPageContainer = ({ match }) => (
  <Query query={getCollectionsByTitleQuery} variables={{ title: match.params.collectionId }}>
    {
      ({ loading, error, data }) => {
        // console.log({ loading, error, data });

        return (loading) ? <WithSpinner />
          : <CollectionPage collection={data.getCollectionsByTitle} />
      }
    }
  </Query>
);

export default CollectionPageContainer;
