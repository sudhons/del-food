import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from '@/views/LandingPage/store'
import meal from '@/views/MealsPage/store'
import drink from '@/views/DrinksPage/store'
import dessert from '@/views/DessertsPage/store'
const baseURL = 'https://food-fast.herokuapp.com/api/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    isLoading: false
  },
  mutations: {
    SET_MENU (state, menu) {
      state.menu = menu
      state.isLoading = false
    },
    TOGGLE_ISLOADING (state) {
      state.isLoading = !state.isLoading
    }
  },
  getters: {
    menuExist (state) {
      return state.menu.length > 0
    }
  },
  actions: {
    async getMenu ({ commit }) {
      commit('TOGGLE_ISLOADING')
      try {
        const response = await axios.get(`${baseURL}/menu`)
        commit('SET_MENU', response.data.data)
      } catch (error) {}
    }
  },
  modules: { auth, meal, drink, dessert }
})
