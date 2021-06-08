import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/search'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/search'
      },
      {
        path: 'search',
        meta: {
          reload: true,
        },
        component: () => import('@/views/Search.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/Add.vue')
      },
      {
        path: 'change',
        component: () => import('@/views/Change.vue')
      },
      {
        path: 'change/:id',
        component: () => import('@/views/Change.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
