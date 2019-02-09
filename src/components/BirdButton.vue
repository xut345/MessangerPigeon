<template>
    <div>
      <div v-on:click="showOption"><BirdLogo /></div>
      
      <MessageBox v-show="active"/>

    </div>


</template>

<script>
import BirdLogo from "./BirdLogo"
import MessageBox from "./MessageBox"

export default {
  components:{
  MessageBox,
  BirdLogo
  },
  data(){
    return{
        active: false
    }
  },
  methods: {
      showOption: function(){
          this.active = !this.active;   
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
