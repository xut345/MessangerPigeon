import MessList from '@/components/MessList'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import KeenUI from 'keen-ui';

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(KeenUI)


describe('MessList', () => {

  let wrapper;

  let actions
  let getters
  let store

  beforeEach(()=>{
      actions = {
        openPigeon:jest.fn(),
        respondPigeon:jest.fn(),

      }
      getters = {

        userPigeonList: () => [
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
        userPigeonMessageList: () => [
          {
              "sent_time": 1553039111925,
              "message_contents": "Hey hey",
              "sent_by": "xiao"
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



  it('cancelPigeon', () => {
    wrapper = shallowMount(MessList,{store, localVue});
    wrapper.setData({


    });
    wrapper.find('#cancel-btn').trigger('click')

    expect(wrapper.vm.showAlert).toBe(false)
    expect(wrapper.vm.content).toBe('')

  })


  it('respondPigeon', () => {
    wrapper = shallowMount(MessList,{store, localVue});


    wrapper.setData({
      showAlert:false,
      content:'123',
      clickedPigeon:{
        "sent_by": "xiao",
        "is_public": false,
        "currently_at": "a",
        "decline_time": 1553068430201,
        "deletion_time": 1553644874168,
        "viewable_by": [
            "xiao",
            "a"
        ],
        "topic": "asad",
        "id": "oH0FZsRdUwHcmok1oHNu"
    },
    currUser:"test",
    switch1:false,

    });

    wrapper.find('#respond-btn').trigger('click')


    expect(actions.respondPigeon).toHaveBeenCalled()

   
    

  })


  
});
