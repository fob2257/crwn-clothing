export const addItemToCart = (cartItems = [], item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  return existingItem ? cartItems.map(cartItem => cartItem.id === item.id ? ({
    ...cartItem,
    quantity: cartItem.quantity + 1,
  }) : cartItem)
    : [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems = [], item) =>
  cartItems.map(cartItem => cartItem.id === item.id ? ({
    ...cartItem,
    quantity: cartItem.quantity - (cartItem.quantity > 1 ? 1 : 0),
  }) : cartItem);

export const clearItemFromCart = (cartItems = [], item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);
