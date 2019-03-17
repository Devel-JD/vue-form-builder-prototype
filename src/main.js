import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use( ElementUI );

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
