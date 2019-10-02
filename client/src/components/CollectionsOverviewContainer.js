import React from 'react';
import { Query } from 'react-apollo';

import { getCollectionsQuery } from '../graphql/queries';

import WithSpinner from './common/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const CollectionsOverviewContainer = () => (
  <Query query={getCollectionsQuery}>
    {
      ({ loading, error, data }) => {
        // console.log({ loading, error, data });

        return (loading) ? <WithSpinner />
          : <CollectionsOverview collections={data.collections} />
      }
    }
  </Query>
);

export default CollectionsOverviewContainer;
