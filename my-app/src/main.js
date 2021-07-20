import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  VueAxios,
  store,
  render: h => h(App)
}).$mount('#app')
