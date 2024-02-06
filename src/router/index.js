import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/homepage/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      meta: {
        title: 'Home'
      },
      component: HomePage,
      children: [
        {
          path: '/api-market',
          name: 'ApiMarket',
          component: () => import('../views/demo/ApiMarket.vue')
        },
        {
          path: '/demand-hall',
          name: 'DemandHall',
          component: () => import('../views/demo/DemandHall.vue')
        },
        {
          path: '/about-us',
          name: 'AboutUs',
          component: () => import('../views/demo/AboutUs.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
