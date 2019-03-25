import MessageBox from '@/components/MessageBox'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import KeenUI from 'keen-ui';
import store from '../../../src/vuex/store'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(KeenUI)


describe('Envelope', () => {
    let wrapper;
    let actions
    let getters
    let store

  beforeEach(()=>{
      actions = {
      }
      getters = {
        user: () => "test",
        toBePickUpMessageList: () => [
          {
              "currently_at": "a",
              "decline_time": 1553068423105,
              "deletion_time": 1553644753931,
              "viewable_by": [
                  "xiao",
                  "a"
              ],
              "topic": "sdsdfd",
              "sent_by": "xiao",
              "is_public": true,
              "id": "BfQsLCSm9CymssrAdanu"
          },
          {
              "sent_by": "Yunlong",
              "is_public": false,
              "currently_at": "xiao",
              "decline_time": 1553065483604,
              "deletion_time": 1553630292059,
              "viewable_by": [
                  "Yunlong",
                  "xiao"
              ],
              "topic": " Hi",
              "id": "MgFr0tJybqZnbvqSwZdh"
          }
      ],
    }
      store = new Vuex.Store({
          state:{},
          actions,
          getters
      })
      
  })



  it('show receive options', () => {
    const wrapper = mount(MessageBox,{store, localVue});

    wrapper.setData({
      show:false
    })
    
    expect(wrapper.contains('#sendBtn')).toBe(true)
    expect(wrapper.contains('#receiveBtn')).toBe(true)
    wrapper.find('#receiveBtn').trigger('click')
    expect(wrapper.contains('#envelop')).toBe(true)
    expect(wrapper.vm.show).toBe(true)
  })


  it('send pigeon', () => {
    const wrapper = mount(MessageBox,{store, localVue});

    wrapper.setData({
      title: '123',
      content:'asdads',
      selected: true,
    })
    
    expect(wrapper.contains('#sendBtn')).toBe(true)
    expect(wrapper.contains('#receiveBtn')).toBe(true)
    wrapper.find('#sendBtn').trigger('click')
    expect(wrapper.contains('#sendAPigeonBtn')).toBe(true)
    wrapper.find('#sendAPigeonBtn').trigger('click')

    expect(wrapper.vm.title).toBe('')
    expect(wrapper.vm.content).toBe('')
    expect(wrapper.vm.selected).toBe(false)
  })


  it('send empty pigeon', () => {
    const wrapper = mount(MessageBox,{store, localVue});

    wrapper.setData({
      title: '',
      content:'',
      selected: true,
      showAlert:false
    })
    
    expect(wrapper.contains('#sendBtn')).toBe(true)
    expect(wrapper.contains('#receiveBtn')).toBe(true)
    wrapper.find('#sendBtn').trigger('click')
    expect(wrapper.contains('#sendAPigeonBtn')).toBe(true)
    wrapper.find('#sendAPigeonBtn').trigger('click')

    expect(wrapper.vm.showAlert).toBe(true)
  })




  
});
