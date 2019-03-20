
import {shallowMount, createLocalVue} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import KeenUI from 'keen-ui';

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(KeenUI)


describe('Login', () => {
  let email ='test'

  let password = 'asd'
  let wrapper;

  let actions
  let getters
  let store

  beforeEach(()=>{
      actions = {
        login: jest.fn()
      }
      getters = {
        loginError: () => true,
        registerError: () => true

    }
      store = new Vuex.Store({
          state:{},
          actions,
          getters
      })
      
  })


  it('login', () => {
    wrapper = shallowMount(Login,{store, localVue});
    wrapper.setData({
      showlogin:true,
      showRegister:false,
      email:'111',
      password:'2222',
      errorMssg:''

    });
    wrapper.find('#login').trigger('click')

    expect(actions.login).not.toHaveBeenCalled()
  })

  it('register', () => {
    wrapper = shallowMount(Login,{store, localVue});
    wrapper.setData({
      showlogin:false,
      showRegister:true,
      email:'111',
      password:'2222',
      errorMssg:''

    });
    wrapper.find('#register').trigger('click')

    expect(actions.login).not.toHaveBeenCalled()
  })
});
