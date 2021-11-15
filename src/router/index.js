import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('../components/Start.vue'),
    meta: { title: 'CV Generator - Start' },
  },
  {
    path: '/basic',
    name: 'BasicData',
    component: () => import('../components/BasicData.vue'),
    meta: { title: 'CV Generator - Basic Stuff' },
  },
  {
    path: '/work',
    name: 'WorkData',
    component: () => import('../components/WorkData.vue'),
    meta: { title: 'CV Generator - Experience' },
  },
  {
    path: '/education',
    name: 'EducationHobbyData',
    component: () => import('../components/EducationHobbyData.vue'),
    meta: { title: 'CV Generator - Education/Hobby' },
  },
  {
    path: '/summary',
    name: 'Result',
    component: () => import('../components/Result.vue'),
    meta: { title: 'CV Generator - Summary' },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
