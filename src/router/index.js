import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Indevelopment from '../views/Indevelopment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/',
    //   redirect: '/indevelopment',
    // },
    {
      path: '/indevelopment',
      name: 'indevelopment',
      component: Indevelopment,
    },
  ],
})

export default router
