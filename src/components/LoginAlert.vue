<template>
<div class="body">
  <div class="login-wrapper">z
    <h2 class="text-center">Sorry. You have to login first.</h2>
    <button class="text-center btn btn-danger" @click="goToLogin()"> Go to login</button>

  </div>
</div>
 
</template>

<script>
import router from '@/router/index'

export default {
    methods: {
      goToLogin(){
        router.push({ name: 'Login' })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  box-sizing: border-box;
}

h2, button{
  margin: 100px auto 30px;
  font-weight: 600;
}

button{
  margin: 50px 340px;
  font-weight: 600;
}

html, 
.body {
  margin: 0;
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


</style>
