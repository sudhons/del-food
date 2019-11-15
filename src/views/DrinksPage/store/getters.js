export default {
  drinks (state, getters, rootState) {
    return rootState.menu.filter(menuItem => menuItem.menu_category === 'drink')
  }
}
