import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' 
import * as actions from './actions'
import * as mutations from './mutations'
import list from '../mock/messages.js'

Vue.use(Vuex)

const state = {
    userMessageList:list,
    toBePickUpMessageList: null,
    user:localStorage.getItem('user'),
    token:localStorage.getItem('token')
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    
    getters,  
    actions,  
    mutations  
})

export default store 