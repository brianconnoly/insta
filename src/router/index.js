import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
