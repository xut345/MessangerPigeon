<template>
<div>   
    <MessageFrameBackground/>
    <BirdButton/>   
    
</div>
</template>

<script>
import MessageFrameBackground from "./MessageFrameBackground"
import BirdButton from "./BirdButton"


export default {
  name: 'MessageFrame',
  components:{
    MessageFrameBackground,
    BirdButton
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
