export default {
  desserts (state, getters, rootState) {
    return rootState.menu.filter(
      menuItem => menuItem.menu_category === 'dessert'
    )
  }
}
