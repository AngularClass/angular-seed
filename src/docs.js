import Vue from 'vue'
import App from './app'

import './styles/app.styl'
import './styles/playground.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
