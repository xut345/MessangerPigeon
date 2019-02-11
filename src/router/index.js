import Vue from 'vue'
import Router from 'vue-router'
import MessageFrame from '@/components/MessageFrame'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/MessageFrame',
      name: 'MessageFrame',
      component: MessageFrame
    }
  ]
})
