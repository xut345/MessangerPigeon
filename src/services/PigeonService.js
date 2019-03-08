import Api from '@/services/Api'
import store from '@/vuex/store'


export default {
  sendPigeon (data) {
    return Api().post('sendPigeon', data).then(function (response) {
      if(response.statusText==='Created'){
        store.commit('showFlyingBird');
        store.commit('hideFlyingBird');
      }
    }).catch(function (error) {
      console.log(error)        
    })
  },
  assignPigeon (data) {
    return Api().post('assignAndUpdateRandomPigeon', data).then(function (response) {
      if(response.statusText==='OK'){
        store.commit('pickNewMessageBox', response.data);
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  sendResponse (data) {
    return Api().post('insertMessage', data).then(function (response) {
      if(response.statusText==='OK'){
        store.commit("sendResponse",response.data)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
}