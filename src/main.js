import Vue from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";

Vue.use(VueGtag, {
  config: { id: "UA-104464953-3" }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
