import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faUser,
  faAt,
  faKey
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(faUserSecret)
library.add(faUser)
library.add(faAt)
library.add(faKey)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
