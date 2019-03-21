import MessageBox from '@/components/MessageBox'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import KeenUI from 'keen-ui'
import store from '../../../src/vuex/store'
jest.mock('axios')
const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(KeenUI)
localVue.use(BootstrapVue)

describe('MessageBox.vue', () => {
    

    it('not show alert at starting', () => {
        const wrapper = mount(MessageBox,{store,localVue})
        expect(wrapper.vm.showAlert).toBe(false)
      })

    it('title is null, showAlert is true ',()=>{
        const wrapper = mount(MessageBox,{store,localVue})
        wrapper.setData({
            title: ''
        });
        wrapper.find('#send').trigger('click')
        wrapper.find('#sendNewMessageBox').trigger('click')
        expect(wrapper.vm.showAlert).toBe(true)
    })
    it('content is null, showAlert is true ',()=>{
        const wrapper = mount(MessageBox,{store,localVue})
        wrapper.setData({
            content: ''
        });
        wrapper.find('#send').trigger('click')
        wrapper.find('#sendNewMessageBox').trigger('click')
        expect(wrapper.vm.showAlert).toBe(true)
    })

    it('selected is null, showAlert is true ',()=>{
        const wrapper = mount(MessageBox,{store,localVue})
        wrapper.setData({
            selected: ''
        });
        wrapper.find('#send').trigger('click')
        wrapper.find('#sendNewMessageBox').trigger('click')
        expect(wrapper.vm.showAlert).toBe(true)
    })
  
    it('after sending a message, showAlert is false, title is null, content is null and selected is false ',()=>{
        const wrapper = mount(MessageBox,{store,localVue})
        wrapper.setData({
            title: 'testing',
            content: 'after sending a message, showAlert is false, title is null, content is null and selected is false',
            selected: true,
        });
        wrapper.find('#send').trigger('click')
        wrapper.find('#sendNewMessageBox').trigger('click')
        expect(wrapper.vm.showAlert).toBe(false)
        expect(wrapper.vm.selected).toBe(false)
        expect(wrapper.vm.title).toBe('')
        expect(wrapper.vm.content).toBe('')
    })

    it('press recieve random message box and change the status of show',()=>{
        
        const wrapper = mount(MessageBox,{store,localVue})
        expect(wrapper.vm.show).toBe(false)
        expect(wrapper.contains('#recieve')).toBe(true)
        wrapper.find('#recieve').trigger('click')
        expect(wrapper.vm.show).toBe(true)
    })

  
})