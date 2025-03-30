import { createRouter, createWebHistory } from 'vue-router'

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    // Route level code-splitting - generates separate chunk
    component: () => import('../views/TestsView.vue'),
  },
  // Add more routes as needed
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Navigation guards (optional)
router.beforeEach((to, from, next) => {
  // Add global navigation logic here
  next()
})

export default router
