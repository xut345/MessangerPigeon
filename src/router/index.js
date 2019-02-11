import Vue from 'vue'
import Router from 'vue-router'
import MessageFrame from '@/components/MessageFrame'
import Login from '@/components/Login'
import LoginAlert from '@/components/LoginAlert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MessageFrame',
      name: 'MessageFrame',
      component: MessageFrame,
      meta: {
        title: 'MessageFrame',
        type: 'login'
      }
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        type: ''
      }
    },
    {
      path: '/LoginAlert',
      name: 'LoginAlert',
      component: LoginAlert,
      meta: {
        title: 'LoginAlert',
        type: ''
      }
    }
  ]
})
