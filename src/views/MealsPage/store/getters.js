export default {
  meals (state, getters, rootState) {
    return rootState.menu.filter(menuItem => menuItem.menu_category === 'meal')
  }
}
