import { gql } from 'apollo-boost';

export const getCollectionsQuery = gql`
{
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`;

export const getCollectionsByTitleQuery = gql`
query getCollectionsByTitle($title: String!) {
  getCollectionsByTitle(title: $title) {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`;

export const getCartHiddenQuery = gql`
{
  cartHidden @client
}
`;
