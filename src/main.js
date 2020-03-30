import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-104464953-3" }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
