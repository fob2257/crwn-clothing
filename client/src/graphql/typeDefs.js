import { gql } from 'apollo-boost';

const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

export default typeDefs;
