import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import AdminHome from '@/views/admin/admin-home.vue';
import SignIn from '@/views/admin/sign-in.vue';
/* Layout */
import LayoutDefault from '@/layouts/index.vue';
import LayoutAdmin from '@/layouts/admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
    ],
  },
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: AdminHome,
      },
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
