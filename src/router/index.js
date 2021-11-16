import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: 'cvgenerator/start',
    name: 'Start',
    component: () => import('../components/Start.vue'),
    meta: { title: 'CV Generator - Start' },
  },
  {
    path: 'cvgenerator/basic',
    name: 'BasicData',
    component: () => import('../components/BasicData.vue'),
    meta: { title: 'CV Generator - Basic Stuff' },
  },
  {
    path: 'cvgenerator/work',
    name: 'WorkData',
    component: () => import('../components/WorkData.vue'),
    meta: { title: 'CV Generator - Experience' },
  },
  {
    path: 'cvgenerator/education',
    name: 'EducationHobbyData',
    component: () => import('../components/EducationHobbyData.vue'),
    meta: { title: 'CV Generator - Education/Hobby' },
  },
  {
    path: 'cvgenerator/summary',
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
