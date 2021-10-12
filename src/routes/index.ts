import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: 'HW',
      component: () => import('../views/HelloWorld.vue'),
      meta: { title: 'HW' }
    }]
  },
  {
    path: '/about',
    component: Layout,
    children: [{
      path: 'about',
      name: 'Megadata',
      component: () => import('@/views/Test.vue'),
      meta: { title: 'Home' }
    }]
  },
  {
    path: '/:path(.*)',
    component: () => import('@/views/NotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
