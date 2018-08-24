import Vue from 'vue'
import GraphqlFlex from './components/GraphQLFlex.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GraphqlFlex)
}).$mount('#app')
