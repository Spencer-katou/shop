import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import BuyingListView from '@/views/BuyingListView.vue'
import CheckListView from '@/views/CheckListView.vue'
import ReceiverView from '@/views/ReceiverView.vue'
import CheckReceverView from '@/views/CheckReceverView.vue'

const title = 'FayPie'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:`${title}`
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignInView
    },
    {
      path: '/BuyingList',
      name: 'BuyingList',
      component: BuyingListView
    },
    {
      path: '/CheckList',
      name: 'CheckList',
      component: CheckListView
    },
    {
      path: '/Receiver',
      name: 'Receiver',
      component: ReceiverView
    },
    {
      path: '/CheckRecever',
      name: 'CheckRecever',
      component: CheckReceverView
    },
  ]
})

export default router
