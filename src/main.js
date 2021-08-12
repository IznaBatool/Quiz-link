import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//Axios
import VueAxios from "vue-axios";
import axios from "axios";
//Bootstrap + icons
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// libaraies are embeded like this separatly with use function 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
