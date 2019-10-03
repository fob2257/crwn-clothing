import { getCartHiddenQuery } from './queries';

const resolvers = ({
  Mutation: {
    toggleCartHidden: (root, args, ctx, info) => {
      const { cache } = ctx;

      const data = cache.readQuery({
        query: getCartHiddenQuery,
      });

      const cartHidden = !data.cartHidden;

      cache.writeQuery({
        query: getCartHiddenQuery,
        data: { cartHidden },
      });

      return cartHidden;
    },
  },
});

export default resolvers;
