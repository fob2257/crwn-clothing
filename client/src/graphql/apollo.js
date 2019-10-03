import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Yihua's Graphql Server
const uri = 'https://crwn-clothing.com'

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri }),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

apolloClient.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
  },
});

export default (props) => (
  <ApolloProvider client={apolloClient}>
    {props.children}
  </ApolloProvider>
);
