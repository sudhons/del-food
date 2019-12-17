export default {
  meals (state, getters, rootState) {
    return rootState.menu.filter(menuItem => menuItem.menu_category === 'meal')
      .map(meal => rootState.cartItems.find(item => item.mealId === meal.menu_id)
        ? { ...meal, isInCart: true }
        : { ...meal, isInCart: false }
      )
  }
}
