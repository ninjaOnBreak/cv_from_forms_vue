import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('../components/Start.vue'),
  },
  {
    path: '/basic',
    name: 'BasicData',
    component: () => import('../components/BasicData.vue'),
  },
  {
    path: '/work',
    name: 'WorkData',
    component: () => import('../components/WorkData.vue'),
  },
  {
    path: '/education',
    name: 'EducationHobbyData',
    component: () => import('../components/EducationHobbyData.vue'),
  },
  {
    path: '/summary',
    name: 'Result',
    component: () => import('../components/Result.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
