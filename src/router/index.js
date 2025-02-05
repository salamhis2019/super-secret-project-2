import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: { transition: 'fade' },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { transition: 'fade' },
    },
  ],
})

export default router
