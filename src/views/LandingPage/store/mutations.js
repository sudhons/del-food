import jwtDecode from 'jwt-decode'
import setAuthToken from '@/utils/setAuthToken'

export default {
  REMOVE_USER (state) {
    setAuthToken(false)
    localStorage.removeItem('fast-food')
    state.isLoggedIn = false
    state.isLoading = false
  },

  SET_USER (state, token) {
    setAuthToken(token)
    localStorage.setItem('fast-food', token)
    state.isLoggedIn = true
    state.user = jwtDecode(token)
    state.isLoading = false
  },

  SET_SIGNUP_ERROR (state, errorMsg) {
    state.signupError = errorMsg
    state.isLoading = false
  },

  SET_LOGIN_ERROR (state, errorMsg) {
    state.loginError = errorMsg
    state.isLoading = false
  },

  TOGGLE_ISLOADING (state) {
    state.loginError = ''
    state.signupError = ''
    state.isLoading = !state.isLoading
  }
}
