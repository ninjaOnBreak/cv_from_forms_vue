import CVGenerator from './main.js';
import store from './store';
import router from './router';

export default {
  install: function (Vue) {
    Vue.component('CVGenerator', CVGenerator);
  },
};
