<template>
  <div>
    <h1>Welcome to Wandering Messenger Pigeon</h1>
    <b-container>
      <b-row align-h="center" class = "mt-5 ">
        <b-col cols = "7">
          <b-card class = "p-1">

            <h3 class = "mb-3">Login</h3>

            <b-input 
              type = "email"
              name = "email"
              v-model = "email"
              placeholder = "email"/>
            
            <b-input class="mt-2"
              type = "password"
              name = "password"
              v-model = "password"
              placeholder = "password"/>
  
            <b-button  @click = "login" class="mt-2 ml-2" type = "submit" variant="primary">Log In</b-button>
            <b-button  @click = "register" class="mt-2 ml-2" type = "submit" variant = "success">Register</b-button>

          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginService from '@/services/LoginService'
import BirdLogo from "./BirdLogo"
export default {
  methods: {
   async register () {
      console.log("sending registration data: ", this.email, this.password)
      const response = await LoginService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    },
    async login () {
      console.log("sending login data: ", this.email, this.password)
      const response = await LoginService.login({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>