import Envelope from '@/components/Envelope'
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
        openPigeon:jest.fn(),
        respondPigeon:jest.fn(),
        addPigeonToList:jest.fn()
      }
      getters = {

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
    
        user: () => "test"

    }
      store = new Vuex.Store({
          state:{},
          actions,
          getters
      })
      
  })

  it('close RespondMessage Box', () => {
    const wrapper = mount(Envelope,{store, localVue});

    wrapper.setData({
        showAlert:true,
        content:'testing'
    })
    
    expect(wrapper.contains('#choosethepigeon')).toBe(true)
    wrapper.find('#choosethepigeon').trigger('click')
    expect(wrapper.contains('#opentheModal')).toBe(true)
    wrapper.find('#opentheModal').trigger('click')
    expect(wrapper.contains('#closeMessageBox')).toBe(true)
    wrapper.find('#closeMessageBox').trigger('click')
    expect(wrapper.vm.showAlert).toBe(false)
    expect(wrapper.vm.content).toBe('')
  })

  it('send RespondMessage Box with showing alert', () => {
    const wrapper = mount(Envelope,{store, localVue});

    wrapper.setData({
        showAlert:false,
        content:''
    })
    
    expect(wrapper.contains('#choosethepigeon')).toBe(true)
    wrapper.find('#choosethepigeon').trigger('click')
    expect(wrapper.contains('#opentheModal')).toBe(true)
    wrapper.find('#opentheModal').trigger('click')
    expect(wrapper.contains('#sendMessageBox')).toBe(true)
    wrapper.find('#sendMessageBox').trigger('click')
    expect(wrapper.vm.showAlert).toBe(true)
  })


  
  it('send RespondMessage Box without showing alert', () => {
    const wrapper = mount(Envelope,{store, localVue});

    wrapper.setData({
        showAlert:true,
        content:'1234'
    })
    expect(wrapper.contains('#choosethepigeon')).toBe(true)
    wrapper.find('#choosethepigeon').trigger('click')
    expect(wrapper.contains('#opentheModal')).toBe(true)
    wrapper.find('#opentheModal').trigger('click')
    expect(wrapper.contains('#sendMessageBox')).toBe(true)
    wrapper.find('#sendMessageBox').trigger('click')
    expect(wrapper.vm.showAlert).toBe(false)
    expect(wrapper.vm.content).toBe('')

  })

  it('open public messagebox', () => {
    const wrapper = mount(Envelope,{store, localVue});
    expect(wrapper.contains('#openpublicbox')).toBe(true)
    wrapper.find('#openpublicbox').trigger('click')
  })

  it('open private messagebox', () => {
    const wrapper = mount(Envelope,{store, localVue});
    expect(wrapper.contains('#choosethepigeon')).toBe(true)
    wrapper.find('#choosethepigeon').trigger('click')
  })


  it('reject a pigeon', () => {
    const wrapper = mount(Envelope,{store, localVue});
    wrapper.setData({
      ableToReject:true
    })
    
    expect(wrapper.contains('#choosethepigeon')).toBe(true)
    wrapper.find('#choosethepigeon').trigger('click')
    expect(wrapper.contains('#rejectBtn')).toBe(true)
    wrapper.find('#rejectBtn').trigger('click')
    expect(wrapper.vm.ableToReject).toBe(true)

  })

  
});
