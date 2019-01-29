import Api from '@/services/Api'

export default {
    regoster (credentials) {
        return Api().post('register', credentials)
    }
}