import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
