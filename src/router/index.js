import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/component-comm-emit',
      name: 'component-comm-emit',
      component: () => import('../views/ComponentCommEmit.vue'),
    },
    {
      path: '/component-comm-props',
      name: 'component-comm-props',
      component: () => import('../views/ComponentCommProps.vue'),
    },
    {
      path: '/creation-component',
      name: 'creation-component',
      component: () => import('../views/CreationComponent.vue'),
    },
    {
      path: '/presention-view',
      name: 'presention-view',
      component: () => import('../views/PresentationView.vue'),
    },
    {
      path: '/system-component',
      name: 'system-component',
      component: () => import('../views/SystemComponent.vue'),
    },
  ],
})

export default router
