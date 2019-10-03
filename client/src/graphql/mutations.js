import { gql } from 'apollo-boost';

export const toggleCartHiddenMutation = gql`
mutation ToggleCartHidden {
  toggleCartHidden @client
}
`;

export const addItemToCartMutation = gql`
mutation AddItemToCart($item: Item!) {
  addItemToCart(item: $item) @client
}
`;

export const removeItemFromCartMutation = gql`
mutation RemoveItemFromCart($item: Item!) {
  removeItemFromCart(item: $item) @client
}
`;

export const clearItemFromCartMutation = gql`
mutation ClearItemFromCart($item: Item!) {
  clearItemFromCart(item: $item) @client
}
`;
