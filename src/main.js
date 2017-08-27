import Vue from 'vue'
import App from './App.vue'

import { router } from './routes'
import { store } from './store/store'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
