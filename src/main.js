import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'G-N62D5H4SMJ'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
