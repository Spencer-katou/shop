import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import ShoppingOneView from '@/views/ShoppingOneView.vue'
import ShoppingTwoView from '@/views/ShoppingTwoView.vue'
import ShoppingThreeView from '@/views/ShoppingThreeView.vue'
import ShoppingFourView from '@/views/ShoppingFourView.vue'

const title = 'FayPie'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: `${title}`
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignInView
    },
    {
      path: '/ShoppingOne',
      name: 'ShoppingOne',
      component: ShoppingOneView
    },
    {
      path: '/ShoppingTwo',
      name: 'ShoppingTwo',
      component: ShoppingTwoView
    },
    {
      path: '/ShoppingThree',
      name: 'ShoppingThree',
      component: ShoppingThreeView
    },
    {
      path: '/ShoppingFour',
      name: 'ShoppingFour',
      component: ShoppingFourView
    },
  ]
})

export default router
