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
import order from '../views/order.vue'
import success from '../views/success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/order',
    component: order,
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
        path: '/cfood',
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
      {
        path: '/success',
        component: success
      },
    ],
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
