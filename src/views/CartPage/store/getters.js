export default {
  cartItems (state, getters, rootState) {
    return rootState.cartItems.map(item => {
      const cartItem = rootState.menu.find(
        menuItem => menuItem.menu_id === item.mealId
      )
      return Object.assign({}, cartItem, { quantity: item.quantity })
    })
  }
}
