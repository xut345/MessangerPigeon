<template>
  <div class="root"> 
    <div id="left"> 
      <Profile/>
      <MessList/>
    </div> 
    <div id="right">
      <router-view/>
    </div> 
  </div> 
 
</template>

<script>

import Profile from "./components/Profile"
import MessList from "./components/MessList"
console.log(this.$store)
export default {
  name: 'App',
  components:{
    Profile,
    MessList
  },
  computed: {
      count(){
          return this.$store.state.count;
      }
  }
}
</script>

<style>
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
