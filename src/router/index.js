import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: {
      menuKey: [['1'], ['']],
      breadcrumb: ['']
    },
    children: [{
      path: '/devices',
      name: 'Devices',
      component: () => import('../views/Devices.vue'),
      meta: {
        menuKey: [['3'], ['sub1']]
      }
    }, {
      path: '/users',
      name: 'Users',
      component: () => import('../views/Users.vue'),
      meta: {
        menuKey: [['4'], ['sub1']]
      }
    }, {
      path: '/running-status',
      name: 'RunningStatus',
      component: () => import('../views/RunningStatus.vue'),
      meta: {
        menuKey: [['5'], ['sub2']]
      }
    }, {
      path: '/energy',
      name: 'Energy',
      component: () => import('../views/Energy.vue'),
      meta: {
        menuKey: [['6'], ['sub2']]
      }
    }, {
      path: '/alarm-info',
      name: 'AlarmInfo',
      component: () => import('../views/AlarmInfo.vue'),
      meta: {
        menuKey: [['7'], ['']]
      }
    }, {
      path: '/bug',
      name: 'Bug',
      component: () => import('../views/Bug.vue'),
      meta: {
        menuKey: [['8'], ['']]
      }
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
