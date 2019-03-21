
 import { shallowMount, createLocalVue } from '@vue/test-utils'
 import VueRouter from 'vue-router'
 import LoginAlert from "@/components/LoginAlert"
 import login from '@/router/index.js'

 const localVue = createLocalVue()
 localVue.use(VueRouter)


 describe("LoginAlert", () => {
   it("LoginAlert button test ", () => {
     const router = new VueRouter({login})
     const wrapper = shallowMount(LoginAlert, {localVue, router})
     expect(wrapper.contains('button')).toBe(true)
     wrapper.find('button').trigger('click')
     router.push("/login")

   })
 })
