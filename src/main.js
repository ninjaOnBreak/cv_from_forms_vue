import Vue from 'vue';
import App from './App.vue';
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import store from './store';
import router from './router';

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
