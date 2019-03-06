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
  sendRespond (data) {
    return Api().post('insertMessage', data).then(function (response) {
      if(response.statusText==='Created'){
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}