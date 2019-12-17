export default {
  UPDATE_CART_ITEM (state, { id, quantity }) {
    state.cart = state.cart.map(cartItem =>
      cartItem.mealId === id ? { ...cartItem, quantity } : cartItem
    )
  },
  REMOVE_CART_ITEM (state, id) {
    state.cart = state.cart.filter(cartItem => cartItem.mealId !== id);
  }
}
