import axios from 'axios'
const baseURL = 'https://food-fast.herokuapp.com/api/v1'

export default {
  async signup ({ commit }, userData) {
    commit('TOGGLE_ISLOADING')
    try {
      const response = await axios.post(`${baseURL}/auth/signup`, userData)
      commit('SET_USER', response.data.data.token)
    } catch (err) {
      err.response && err.response.status === 409
        ? commit('SET_SIGNUP_ERROR', {
          msg: 'Email already in use',
          status: 409
        })
        : commit('SET_SIGNUP_ERROR', { msg: 'Something went wrong' })
    }
  },

  async login ({ commit }, userData) {
    commit('TOGGLE_ISLOADING')
    try {
      const response = await axios.post(`${baseURL}/auth/login`, userData)
      commit('SET_USER', response.data.data.token)
    } catch (err) {
      err.response && err.response.status === 401
        ? commit('SET_LOGIN_ERROR', { msg: 'Invalid Credentials', status: 401 })
        : commit('SET_LOGIN_ERROR', { msg: 'Something went wrong' })
    }
  }
}
