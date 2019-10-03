import React from 'react';
import { Query } from 'react-apollo';

import { getCartHiddenQuery } from '../graphql/queries';

import Header from './Header';

const HeaderContainer = () => (
  <Query query={getCartHiddenQuery}>
    {
      ({ data: { cartHidden } }) => <Header hidden={cartHidden} />
    }
  </Query>
);

export default HeaderContainer;
