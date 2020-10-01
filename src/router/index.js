import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import foot from '../views/foot.vue'

import wfood from '../views/wfood.vue'
import cfood from '../views/cfood.vue'
import drink from '../views/drink.vue'
import dessert from '../views/dessert.vue'
import cart from '../views/cart.vue'
import pay from '../views/pay.vue'
import success from '../views/success.vue'
import wait from '../views/wait.vue'
import order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    component: order,
  },
  {
    path: '/',
    component: login,
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/pay',
    component: pay,
  },
  {
    path: '/foot',
    component: foot,
    children: [
      {
        path: '/wfood',
        component: wfood
      },
      {
        path: '/foot',
        component: cfood
      },
      {
        path: '/drink',
        component: drink
      },
      {
        path: '/dessert',
        component: dessert
      },
      {
        path: '/cart',
        component: cart
      },
    ],
  },
  {
    path: '/success',
    component: success
  },
  {
    path: '/wait',
    component: wait
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
