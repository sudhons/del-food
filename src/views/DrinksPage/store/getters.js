export default {
  drinks (state, getters, rootState) {
    return rootState.menu.filter(menuItem => menuItem.menu_category === 'drink')
      .map(meal => rootState.cartItems.find(item => item.mealId === meal.menu_id)
        ? { ...meal, isInCart: true }
        : { ...meal, isInCart: false }
      )
  }
}
