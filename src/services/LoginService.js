import Api from '@/services/Api'
import router from '@/router/index'

export default {
    register (credentials) {
        return Api().post('register', credentials).then(function (response) {
            router.push({ name: 'MessageFrame' })
          }).catch(function (error) {
            console.log(error)
          });
    },
    login (credentials) {
        return Api().post('login', credentials)
        .then(response => {
          console.log(response)

      })
      .then(  router.push({ name: 'MessageFrame' }))          
       .catch(function (error) {
            console.log(error)
          });
    }
}