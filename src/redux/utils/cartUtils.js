export const addItemToCart = (cartItems = [], item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  return existingItem ? cartItems.map(cartItem => cartItem.id === item.id ? ({
    ...cartItem,
    quantity: cartItem.quantity + 1,
  }) : cartItem)
    : [
      ...cartItems,
      { ...item, quantity: 1 },
    ];
};
