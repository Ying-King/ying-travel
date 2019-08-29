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
  ],
  scrollBehavior(to, from, savedPosition) { // 当切换到新路由时，页面滚到顶部
    return { x: 0, y: 0 }; // 期望滚动到哪个的位置
  }
});
