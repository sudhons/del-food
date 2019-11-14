import Vue from 'vue'
import Router from 'vue-router'
import LandingRouter from './views/LandingPage/router/'
import Customer from './layouts/customer/router/'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [LandingRouter, Customer]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.auth.isLoggedIn
  if (to.meta.isAuth && !isLoggedIn) {
    router.push('/')
    return
  }

  if (to.meta.isAuth === false && isLoggedIn) {
    return next('/menu')
  }

  next()
})

export default router
