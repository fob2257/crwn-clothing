import constants from '../constants';

export const toggleCartHidden = () => ({ type: constants.TOGGLE_CART_HIDDEN });

export const addCartItem = item => ({ type: constants.ADD_CART_ITEM, payload: item });

export const removeCartItem = item => ({ type: constants.REMOVE_CART_ITEM, payload: item });

export const clearItemFromCart = item => ({ type: constants.CLEAR_ITEM_FROM_CART, payload: item });

export const clearCart = () => ({ type: constants.CLEAR_CART });
