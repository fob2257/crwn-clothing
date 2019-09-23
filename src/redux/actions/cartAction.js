import constants from '../constants';

export const toggleCartHidden = () => ({ type: constants.TOGGLE_CART_HIDDEN });

export const addCartItem = item => ({ type: constants.ADD_CART_ITEM, payload: item });
