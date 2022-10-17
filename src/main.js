import Vue from "vue";
import VueTelInput from "vue-tel-input";
import App from "./App.vue";

Vue.use(VueTelInput);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
