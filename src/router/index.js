import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Admin from '@/views/Admin.vue';
import AdminHome from '@/views/Admin/AdminHome.vue';
/* Layout */
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '',
        component: AdminHome,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
