import { gql } from 'apollo-boost';

export const toggleCartHiddenMutation = gql`
mutation ToggleCartHidden {
  toggleCartHidden @client
}
`;
