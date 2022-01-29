import { createRouter, createWebHashHistory } from 'vue-router';

import GLayout from '../layout/GLayout.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GLayout,
      children: [
        {
          path: '',
          name: 'default',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
