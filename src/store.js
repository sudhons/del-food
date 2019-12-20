import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from '@/views/LandingPage/store'
import meal from '@/views/MealsPage/store'
import drink from '@/views/DrinksPage/store'
import dessert from '@/views/DessertsPage/store'
import cart from '@/views/CartPage/store'
const baseURL = 'https://food-fast.herokuapp.com/api/v1'

Vue.use(Vuex)
const persistedCartItems = localStorage.getItem('cartItems')
const store = new Vuex.Store({
  state: {
    menu: [],
    cartItems: persistedCartItems ? JSON.parse(persistedCartItems) : [],
    isLoading: false
  },
  mutations: {
    SET_MENU (state, menu) {
      state.menu = menu
      state.isLoading = false
    },
    TOGGLE_ISLOADING (state, payload) {
      state.isLoading = payload || !state.isLoading
    },
    UPDATE_CART_ITEM (state, { id, quantity }) {
      state.cartItems = state.cartItems.map(cartItem =>
        cartItem.mealId === id ? { ...cartItem, quantity } : cartItem
      )
    },
    REMOVE_CART_ITEM (state, id) {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.mealId !== id)
    },
    ADD_CART_ITEM (state, id) {
      state.cartItems.push({ mealId: id, quantity: 1 })
    }
  },
  getters: {
    menuExist (state) {
      return state.menu.length > 0
    }
  },
  actions: {
    async getMenu ({ commit }) {
      commit('TOGGLE_ISLOADING', true)
      try {
        const response = await axios.get(`${baseURL}/menu`)
        commit('SET_MENU', response.data.data)
      } catch (error) { }
    }
  },
  modules: { auth, meal, drink, dessert, cart }
})

store.watch(({ cartItems }) => cartItems, cartItems => localStorage.setItem('cartItems', JSON.stringify(cartItems)))

export default store
