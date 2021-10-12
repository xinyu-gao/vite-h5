import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      component: () => import('../views/QueryPay.vue')
    }]
  },
  {
    path: '/query_pay',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/QueryPay.vue')
    }]
  },
  {
    path: '/query_result',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/QueryResult.vue')
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
