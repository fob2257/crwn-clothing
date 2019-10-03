import {
  getCartHiddenQuery,
  getCartItemsQuery,
  getItemsCountQuery,
  getCartTotalQuery,
} from './queries';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../redux/utils/cartUtils';

const cartItemQueries = (cache, cartItems) => {
  cache.writeQuery({
    query: getCartItemsQuery,
    data: { cartItems },
  });

  cache.writeQuery({
    query: getItemsCountQuery,
    data: {
      itemsCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
    },
  });

  cache.writeQuery({
    query: getCartTotalQuery,
    data: {
      cartTotal: cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0),
    },
  });
};

const resolvers = ({
  Mutation: {
    toggleCartHidden: (root, args, ctx, info) => {
      const { cache } = ctx;

      const data = cache.readQuery({ query: getCartHiddenQuery });

      const cartHidden = !data.cartHidden;

      cache.writeQuery({
        query: getCartHiddenQuery,
        data: { cartHidden },
      });

      return cartHidden;
    },
    addItemToCart: (root, args, ctx, info) => {
      const { cache } = ctx;
      const { item } = args;

      let { cartItems } = cache.readQuery({ query: getCartItemsQuery });

      cartItems = addItemToCart(cartItems, item);

      cartItemQueries(cache, cartItems);

      return cartItems;
    },
    removeItemFromCart: (root, args, ctx, info) => {
      const { cache } = ctx;
      const { item } = args;

      let { cartItems } = cache.readQuery({ query: getCartItemsQuery });

      cartItems = removeItemFromCart(cartItems, item);

      cartItemQueries(cache, cartItems);

      return cartItems;
    },
    clearItemFromCart: (root, args, ctx, info) => {
      const { cache } = ctx;
      const { item } = args;

      let { cartItems } = cache.readQuery({ query: getCartItemsQuery });

      cartItems = clearItemFromCart(cartItems, item);

      cartItemQueries(cache, cartItems);

      return cartItems;
    },
  },
});

export default resolvers;
