import constants from '../constants';

import { addItemToCart } from '../utils/cartUtils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }

    case constants.ADD_CART_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    }

    default: { return state; }
  }
};
