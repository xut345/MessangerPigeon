import Api from '@/services/Api'
import router from '@/router/index'
import store from '@/vuex/store'

export default {
    register (credentials) {
        return Api().post('register', credentials).then(function (response) {
          console.log(response)
            router.push({ name: 'MessageFrame' })
          }).catch(function (error) {
            console.log(error)
          });
    },
    login (credentials) {
        return Api().post('login', credentials)
        .then( (response) => {
          if(response.statusText==='OK'){
            localStorage.setItem('user', credentials.email);
            localStorage.setItem('token', response.data.authorization);

            store.commit('login', credentials.email);
            store.commit('setToken', response.data.authorization);
            router.push({ name: 'MessageFrame' })

          }
          else{
            alert("Your username or password is wrong.")
          }
          
      })     
      .catch(function (error) {
          console.log(error)
        });
    }
}