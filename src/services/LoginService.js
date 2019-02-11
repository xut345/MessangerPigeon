import Api from '@/services/Api'
import router from '@/router/index'
import store from '@/vuex/store'


export default {
    register (credentials) {
      return Api().post('register', credentials).then(function (response) {
        console.log(response)
        if(response.statusText==='Created'){
          localStorage.setItem('user', credentials.email);
          localStorage.setItem('token', response.data.authorization);

          store.commit('login', credentials.email);
          store.commit('setToken', response.data.authorization);
          router.push({ name: 'MessageFrame' })
        } else {
          alert("An error has occurred with the login process.")
        }
      }).catch(function (error) {
        alert(error)
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
          else {
            alert("An error has occurred with the login process.")
          }
      })     
      .catch(function (error) {
        alert(error)
      });
    }
}