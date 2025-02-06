import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import QuestionOne from '../views/QuestionOne.vue'
import QuestionTwo from '../views/QuestionTwo.vue'
import QuestionThree from '../views/QuestionThree.vue'
import HomeView from '@/views/HomeView.vue'
import YesScreen from '@/views/YesScreen.vue'
import RewardView from '@/views/RewardView.vue'

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
    {
      path: '/question1',
      name: 'question1',
      component: QuestionOne,
      meta: { transition: 'fade' },
    },
    {
      path: '/question2',
      name: 'question2',
      component: QuestionTwo,
      meta: { transition: 'fade' },
    },
    {
      path: '/question3',
      name: 'question3',
      component: QuestionThree,
      meta: { transition: 'fade' },
    },
    {
      path: '/yes-screen',
      name: 'yes-screen',
      component: YesScreen,
      meta: { transition: 'fade' },
    },
    {
      path: '/reward',
      name: 'reward',
      component: RewardView,
      meta: { transition: 'fade' },
    },
  ],
})

export default router
