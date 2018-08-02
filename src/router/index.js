import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MyMessage from '@/pages/message/MyMessage'
import Find from '@/pages/find/Find'
import Mine from '@/pages/mine/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/message',
      name: 'MyMessage',
      component: MyMessage
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/home',
      name: 'Home1',
      component: Home
    },
  ]
})
