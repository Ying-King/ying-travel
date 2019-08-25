import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/scss/index.scss';

import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import store from './store';

Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
