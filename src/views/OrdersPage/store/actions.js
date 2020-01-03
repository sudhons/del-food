import axios from 'axios'
const baseURL = 'https://food-fast.herokuapp.com/api/v1'

export default {
  async getOrders ({ commit }) {
    commit('TOGGLE_ISLOADING', true)
    try {
      const response = await axios.get(`${baseURL}/orders`)
      commit('SET_ORDERS', response.data.data)
      commit('TOGGLE_ISLOADING', false)
    } catch (error) { }
  }
}
