<template>
<div class="root"> 
    <div id="left"> 
      <Profile/>
      <!-- <MessList/>  move to iteration2 -->
      <div class="left-fun">  <button class="btn btn-danger" @click="userLogout()">Logout</button> </div>
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

export default {
  name: 'MessageFrame',
  data(){
    return{
      active:false
    }
  },
  components:{
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
  bottom: 0;
  padding-left: 110px;
  padding-top: 20px;
  height: 80px;
  width: 100%;
  border-top: 1px solid #0587a846;
}
</style>
