
import {mount, shallowMount} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import expect from 'expect';

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
    wrapper.find('btn btn-secondary').trigger('click')



    expect(wrapper.html()).toContain('Your username or password is wrong.')
  })
});
