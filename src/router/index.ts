import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    meta: { layout: 'empty' },
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    meta: { layout: 'empty' },
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: 'main' },
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { layout: 'main' },
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    meta: { layout: 'main' },
    component: () => import('../views/Documentation.vue')
  },
  {
    path: '/looona',
    name: 'Looona',
    meta: { layout: 'main' },
    component: () => import('../views/Looona.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
