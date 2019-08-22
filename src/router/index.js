import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('pages/home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('pages/city')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('pages/detail')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
