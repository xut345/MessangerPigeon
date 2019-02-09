
import Vue from 'vue'
import vuex from 'vuex'
import messages from './modules/messages'

Vue.use(vuex);
 
export default new vuex.Store({
    modules: {
        messages,
    },
    strict: true
})