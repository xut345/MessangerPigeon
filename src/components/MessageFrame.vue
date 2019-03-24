<template>
<div class="root"> 
    <div id="left"> 
      <Profile/>
      <MessList/>
      <div class="left-fun">  <button class="btn btn-outline-secondary btn-logout" @click="userLogout()">Logout</button> </div>
    </div> 
    <div id="right">
      <MessageFrameBackground/>
      <BirdButton/>
      <div v-if="showFlyingBird"> <flying-birds/>   </div>   
    </div> 
  </div> 


</template>

<script>
import MessageFrameBackground from "./MessageFrameBackground"
import BirdButton from "./BirdButton"
import FlyingBirds from "./FlyingBirds"
import Profile from "./Profile"
import router from '@/router/index'
import {mapActions, mapGetters} from 'vuex'
import { setTimeout } from 'timers';
import MessList from "./MessList"

export default {
  name: 'MessageFrame',
  components:{
    MessList,
    MessageFrameBackground,
    BirdButton,
    Profile,
    FlyingBirds,
  },
  methods:{
    ...mapActions( 
        ['logout']
    ),
    userLogout(){
      this.logout();
      router.push({ name: 'Login' })
    }
  },
    computed: {
      ...mapGetters(['showFlyingBird'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#left{
  z-index: 3;
  float: left;
  width: 300px;
  height: 100%;
  overflow: hidden;
  background: #fafafa;
  position:fixed;
  top: 0;
  left: 0;

}
#right {
  color: #2c3e50;
  float: left;
  position: relative;overflow: hidden;
  height: 100%;
  width: (100%-300px);
}

.left-fun{
  position: fixed;
  top: 80px;
  left: 110px;
  padding-left: 110px;
  padding-top: 20px;
  height: 30%;
  width: 10%;
}

.btn-logout{
  width:70px;
  font-size: 12px;
  height: 30px;
  padding: 5px;
}
</style>
