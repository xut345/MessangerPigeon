<template>
  <div class="root"> 
    <div id="left"> 
      <Profile/>
      <!-- <MessList/>  move to iteration2 -->
      
    </div> 
    <div id="right">
      <MessageFrameBackground/>
      <BirdButton/>   
    </div> 
  </div> 


</template>

<script>
import MessageFrameBackground from "./MessageFrameBackground"
import BirdButton from "./BirdButton"
import Profile from "./Profile"


export default {
  name: 'MessageFrame',
  components:{
    MessageFrameBackground,
    BirdButton,
    Profile,
  },
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
</style>
