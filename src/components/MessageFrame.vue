<template>
<div>   
    <MessageFrameBackground/>
    <BirdButton />
    <ui-modal ref="modal8" size="medium" title="Large modal">
        Hello, World. What's happening?
    </ui-modal>
</div>
</template>

<script>
import MessageBox from "./MessageBox"
import MessageFrameBackground from "./MessageFrameBackground"

import BirdButton from "./BirdButton"


export default {
  name: 'MessageFrame',
  components:{
    MessageBox,
    MessageFrameBackground,
    BirdButton
  },
  data(){
    return{
      isEditing:false,
      size:"large"
    }
  },
      methods: {
        openModal(ref) {
            this.$refs[ref].open();
        },
        closeModal(ref) {
            this.$refs[ref].close();
        }
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
