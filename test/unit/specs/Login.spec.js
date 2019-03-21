
import {mount, shallowMount} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import expect from 'expect';
//import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'






describe('Login', () => {
  let email ='test'

  let password = 'asd'
  let wrapper;


  it('should render correct contents', () => {
    wrapper = mount(Login);
    wrapper.setData({
      showlogin:true,
      showRegister:false,
      email:'111',
      password:'2222',
      errorMssg:''

    });
    wrapper.find('registerBox').trigger('click')



    expect(wrapper.html()).toContain('Your username or password is wrong.')
  })

  //
  // let actions
  // let store
  //
  // beforeEach(() => {
  //   actions = {
  //     loginError: jest.fn(),
  //     registerError: jest.fn()
  //   }
  //   store = new Vuex.Store({
  //     state: {},
  //     actions
  //   })
  // })
  //
  // it('press logout the page will jump to home page', () => {
  //   const wrapper = shallowMount(Login,{store,localVue})
  //   wrapper.find('button').trigger('click')
  //   expect(actions.loginError).toHaveBeenCalled()
  // })
});
