import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faUser,
  faAt,
  faBars,
  faLock,
  faSpinner,
  faCaretSquareDown,
  faTrash,
  faAddressCard,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(
  faUserSecret,
  faUser,
  faAt,
  faBars,
  faLock,
  faSpinner,
  faCaretSquareDown,
  faTrash,
  faAddressCard,
  faPhone
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
