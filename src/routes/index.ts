import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: 'Megadata',
      component: () => import('@/views/HelloWorld.vue'),
      meta: { title: 'Home' }
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

export default createRouter({
  history: createWebHistory(),
  routes
})
