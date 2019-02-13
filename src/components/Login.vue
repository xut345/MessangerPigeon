<template>
<div class="body">
  <b-alert :show="loginError">
    Your username or password is wrong.
  </b-alert>
  <b-alert :show="registerError">
    Your username has been registered.
  </b-alert>
   <div class="notice">
    Click the Pigeon to start your trip.
  </div>
 <div class="login-wrapper">
  <div class="login-left">
    <div  class="h1"><BirdLogo></BirdLogo></div>
  </div>
  <div class="login-right">
    <div class="loginBox" v-show="showlogin">
       <div class="h2">Log in</div>
       <div class="form-group">
          <input type="text" id="email1" v-model = "email" placeholder="User name"> 
        </div>
       <div class="form-group">
          <input type="password" id="password1" v-model = "password" placeholder="Password">
       </div>
       <div class="checkbox-container">
          <!-- <input type="checkbox">
         <div class="text-checkbox">Remember me</div> -->
       </div> 
       <div class="button-area">
         <button @click="login" class="btn btn-primary" type = "submit" :disabled='!fieldsFilled'>Login</button>
         <button @click="showlogin=false,showRegister=true" class="btn btn-secondary">Sign Up</button>
      </div>
    </div>
    <div class="registerBox" v-show="showRegister">
       <div class="h2">Register</div>
       <div class="form-group">
          <input type="text" id="email2" v-model = "email" placeholder="Username">
        </div>
       <div class="form-group">
          <input type="password" id="password2" v-model = "password" placeholder="Password">
       </div>
        <div class="checkbox-container">
          <!-- <input type="checkbox">
         <div class="text-checkbox">I agree with the terms of service.</div> -->
       </div> 
       <div class="button-area">
         <button @click="register" class="btn btn-primary" type = "submit" :disabled='!fieldsFilled'>Sign up</button>
         <button @click="showlogin=true,showRegister=false" class="btn btn-secondary">login</button>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
import LoginService from '@/services/LoginService'
import BirdLogo from "./BirdLogo"
import {mapActions, mapGetters} from 'vuex'
import router from '@/router/index'

export default {
  data() {
    return {
      showlogin:true,
      showRegister:false,
      email:'',
      password:'',
      errorMssg:'',
    }
  },
  components: {
    BirdLogo
  },
  computed: {
    ...mapGetters(['loginError','registerError']),
    fieldsFilled () {
      return this.email && this.password;
    }
  },
  methods: {
    async register () {
      try {
        const response = await LoginService.register({
          email: this.email,
          password: this.password
        })
      }
      catch (error){
          console.log(error)
      }
    },
    async login () {
      try {
        const response = await LoginService.login({
          email: this.email,
          password: this.password
        })
      }
      catch (error){
          console.log(error)
      }
    }
  },
  mounted() {
    var openLoginRight = document.querySelector('.h1');
    var loginWrapper = document.querySelector('.login-wrapper');
    openLoginRight.addEventListener('click', function() {
      loginWrapper.classList.toggle('open'); 
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

* {
  box-sizing: border-box;
}

.alert{
  position: fixed;
  top: 100px;

}
.notice{
  position: fixed;
  top: 600px;
  z-index: 3;
  color: #aaa;
  font-weight: 600;
}

html, 
.body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.body {
  font-family: 'Lato', sans-serif;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: linear-gradient(243.87deg, rgb(58, 194, 248) 30.6%, #ffffff 130.6%);
  overflow: hidden;
  width: 100%;
  padding: 250px;
}

input {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  border-bottom: 1px solid #AAAAAA;
  font-size: 16px;
  color: #000;
  border-radius: 0;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  height: 40px;
}

button,
input:focus {
  outline: 0;
}

::-webkit-input-placeholder { 
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.00933333em;
}

.form-group {
  position: relative;
  padding-top: 15px;
  margin-top: 10px;
}

label {
  position: absolute;
  top: 0;
  opacity: 1;
  -webkit-transform: translateY(5px);
          transform: translateY(5px);
  color: #aaa;
  font-weight: 300;
  font-size: 13px;
  letter-spacing: -0.00933333em;
  transition: all 0.2s ease-out;
}

input:placeholder-shown  + label {
  opacity: 0;
  -webkit-transform: translateY(15px);
          transform: translateY(15px);
}

.h1 {
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  cursor: pointer;
  position: absolute;
  left:36%;
  top:20%;
}

.open .h1 {
  -webkit-transform: translateX(200px) translateZ(0);
          transform: translateX(200px) translateZ(0);
}

.h2 {
  color: #000;
  font-size: 20px;
  letter-spacing: -0.00933333em;
  font-weight: 600;
  padding-bottom: 15px;
  text-align: center;
}

.login-wrapper {
  width: 800px;
  height: 440px;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  border-radius:8px;
  box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

.login-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}

.login-left img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}

.open .login-left img {
  -webkit-transform: translateX(280px) translateZ(0);  
          transform: translateX(280px) translateZ(0);  
}

.open .login-left {
  -webkit-transform: translateX(-400px) translateZ(0);
          transform: translateX(-400px) translateZ(0);
} 

.login-right {
  padding: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  -webkit-transform: translateX(400px) translateZ(0);
          transform: translateX(400px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}

.open .login-right {
  -webkit-transform: translateX(0px) translateZ(0);
          transform: translateX(0px) translateZ(0);
}

.checkbox-container {
  display: flex;
  margin-top: 35px;
}

.text-checkbox {
  color: #aaa; 
  font-size: 16px;
  letter-spacing: -0.00933333em;
  font-weight: 300;
  margin-left: 15px;
}

input[type="checkbox"] {
  cursor: pointer;
  margin: 0;
  height: 22px;
  position: relative;
  width: 22px;
  -webkit-appearance: none;
  transition: all 180ms linear;
}

input[type="checkbox"]:before {
    border: 1px solid #aaa;
    background-color: #fff;
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 2px;
    transition: all 180ms linear;
}

input[type="checkbox"]:checked:before {
  background: linear-gradient(198.08deg, rgb(108, 207, 247) 45.34%, rgb(108, 207, 247) 224.21%);
  border: 1px solid rgb(108, 207, 247);
}

input[type="checkbox"]:after {
  content: '';
  border: 2px solid #fff;
  border-right: 0;
  border-top: 0;
  display: block;
  height: 4px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  width: 12px;
  transition: all 180ms linear;
}

input[type="checkbox"]:checked:after {
    opacity: 1;
} 

.button-area {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.btn {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;  
  background-color: transparent;
  border: none;
  border-radius: 2px;
  height: 40px;
  display: flex;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: -0.00933333em;
}

.btn-primary {
  font-size: 16px;
  margin-left:65px;
  padding: 6px 70px;
  color: #fff;
  background: linear-gradient(198.08deg, rgb(108, 207, 247) 45.34%, rgb(108, 207, 247) 224.21%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  font-size: 12px;
  padding: 0 0px;
  margin-top:60px;
  color: rgb(108, 207, 247);  
  background: linear-gradient(198.08deg, rgb(255, 255, 255) 45.34%, rgb(247, 249, 250) 224.21%);
  
}
</style>