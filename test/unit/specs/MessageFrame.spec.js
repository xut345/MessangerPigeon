import MessageFrame from '@/components/MessageFrame'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)


describe('MessageFrame.vue', () => {
    let actions
    let getters
    let store

    beforeEach(()=>{
        actions = {
            logout: jest.fn()
        }
        getters = {
            showFlyingBird: () => 'true'
        }
        store = new Vuex.Store({
            state:{},
            actions,
            getters
        })
        
    })
    
    it('press logout the page will jump to home page', () => {
        const wrapper = shallowMount(MessageFrame,{store,localVue})
        wrapper.find('button').trigger('click')
        expect(actions.logout).toHaveBeenCalled()
      })
})