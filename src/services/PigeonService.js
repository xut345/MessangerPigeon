import Api from '@/services/Api'
import store from '@/vuex/store'


export default {
  sendPigeon (data) {
    return Api().post('sendPigeon', data).then(function (response) {
      console.log(response)
      if(response.statusText==='Created'){
        store.commit('showFlyingBird');
        store.commit('hideFlyingBird');
        store.commit('addPigeonToList',response.data);
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
  respondPigeon (data) {
    return Api().post('insertMessage', data).then(function (response) {
      if(response.statusText==='OK'){
        console.log(response.data)
        store.commit("respondPigeon",response.data)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  getPigeonList (data) {
    return Api().get('getPigeonList', {params :{name:data}}).then(function (response) {
      if(response.statusText==='OK') {
        store.commit("getPigeonList", response.data)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  getPigeonMessage (pigeonId, getMessage) {
    return Api().get('getPigeon/'+pigeonId, {params: {getMessages:getMessage}}).then(function (response) {
      if(response.statusText==='OK') {
        store.commit("getPigeonMessage", response.data.messages)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  declineMessage(data) {
    return Api().post('declineMessage', data).then(function (response){
      store.commit("declinePigeon", data.id)
    }).catch(function (error) {
      console.log(error)
    })
  },
}
