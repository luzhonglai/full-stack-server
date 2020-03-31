import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from './store'
import 'amfe-flexible'
Vue.use(Element);

Vue.config.productionTip = false;
Vue.prototype.add = '111'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
