import Vue from 'vue'
import Router from 'vue-router'
import MessageFrame from '@/components/MessageFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MessageFrame',
      component: MessageFrame
    }
  ]
})
