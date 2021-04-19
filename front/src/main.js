import Vue from 'vue'
import App from './components/App.vue'
import {store} from "../store/index";
import Vuex from "vuex";

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
