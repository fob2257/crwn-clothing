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

export const getCartItemsQuery = gql`
{
  cartItems @client
}
`;

export const getItemsCountQuery = gql`
{
  itemsCount @client
}
`;

export const getCartTotalQuery = gql`
{
  cartTotal @client
}
`;

export const getCartItemsAndCartTotalQuery = gql`
{
  cartItems @client
  cartTotal @client
}
`;
