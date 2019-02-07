<template>
<div>
  <div class="wing1 right1"></div>
  <div class="wing1 left1"></div>
  <div class="heart1" @click="openModal('receiveMessage')"></div>
  <div id="envelope1"></div>
  <div class="wing2 right2"></div>
  <div class="wing2 left2"></div>
  <div class="heart2" @click="openModal('receiveMessage')"></div>
  <div id="envelope2"></div>
  <ui-modal ref="receiveMessage" title="Message"  size="large" align-top :align-top-margin="200">
            <div>
                <b-form-textarea id="textarea1"
                        v-model="content"
                        :rows="10"
                        :max-rows="10">
                </b-form-textarea>
                <b-button  @click="closeModal('receiveMessage')" size="lg" variant="outline-primary" style="float:left" > Reject </b-button>
                <b-button  @click="closeModal('receiveMessage')" size="lg" variant="outline-primary" style="float:right" > Accept </b-button>
            </div>
        </ui-modal>
  
</div>
</template>

<script>
export default {
  name: 'Envelope',
  components:{
  },
  data(){
    return{
    }
  },
  methods: {
    openModal(ref) {
        this.$refs[ref].open();
    },
    closeModal(ref) {
        this.$refs[ref].close();
    }
  }
}
</script>

<style lang="scss">

/* wings */

.wing1 {
    background:white;
     border-radius: 12px 20px 60px 20px;
     width:120px;
     height:50px; margin-top:80px;
     position:relative;
}

/* right wing */

.right1 {
    left:900px;
    top:100px;
    animation:flap1 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
     border-radius: 12px 20px 60px 20px;
    transform:rotate(-10deg) translate(250px,0);
}

@keyframes flap1 {
    0% {
        transform:rotate(-10deg) translate(250px,0);
    }
    
    50% {
        transform:rotate(-5deg) translate(250px,0);
    }
}
.right1:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
    height:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 20px 20px 60px 20px;
    transform:rotate(20deg) translate(-1px,0);
    margin-top:38px;
}

.right1:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
    transform:rotate(29deg) translate(-8px,0);
    height:30%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 0px 0px 60px 70px;
    margin-top:66px;
}

/* left wing */

.left1 {
    left:970px;
    bottom:25px;
    border-radius:12px 20px 20px 60px;
    animation:flap2 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    transform:rotate(10deg) translate(-248px, 0);
}

@keyframes flap2 {
    0% {
        transform:rotate(10deg) translate(-248px,0);
    }
    
    50% {
        transform:rotate(5deg) translate(-248px,0);
    }
}


.left1:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    transform:translate(46%,0) rotate(-20deg);
    height:60%;
      border-radius:12px 20px 70px 70px;
    margin-top:40px;
}

.left1:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
       border-bottom:3px solid rgba(0,0,0,.08);
    height:30%;
     transform:translate(164%,0) rotate(-34deg);
     border-radius:0px 0px 70px 60px;
    margin-top:58px;
}

/* heart */
.heart1:hover{
  cursor: pointer;
}
.heart1{
    position: relative;
    bottom:160px;
    left:950px;
    width: 120px;
    z-index:1;
    height: 100px;
    animation: heart1 1s infinite;
    transform:scale(.8);
    transition:.6s;
    margin-top:60px;
    
}
.heart1:before,
.heart1:after{
    content: "";
    width: 50px;
    height: 80px;
    position: absolute;
    left: 50px;
    top: 0;
    border-radius: 50px 50px 6px 6px;
    background: crimson;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}
.heart1:after{
    left: 0;
    transform: rotate(45deg);
    transform-origin :100% 100%;
}

@keyframes heart1 {
    0% {
        transform: scale(.8) translate(0,0);
    }
    
    50% {
        transform: scale(.92) translate(0, 12px);
    }
    
    100% {
        transform:scale(.8);
    }
}

/* envelope */
  #envelope1 {
  background: white; 
  margin: 200px auto;
  height: 200*0.8px;
  position: relative;
  bottom:500px;
  left:350px;
  width: 320*0.8px;
  border-radius:8px;
  overflow:hidden;
  animation: floaty 1s infinite;
}

@keyframes floaty {
    0% {
        transform:translate(0,0);
    }
    
    50% {
        transform:translate(0, 12px);
    }
}


.wing2 {
    background:white;
     border-radius: 12px 20px 60px 20px;
     width:120px;
     height:50px; margin-top:80px;
     position:relative;
}

/* right wing */

.right2 {
    position:absolute;
    left:900px;
    top:385px;
    animation:flap11 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
     border-radius: 12px 20px 60px 20px;
    transform:rotate(-10deg) translate(250px,0);
}

@keyframes flap11 {
    0% {
        transform:rotate(-10deg) translate(250px,0);
    }
    
    50% {
        transform:rotate(-5deg) translate(250px,0);
    }
}
.right2:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
    height:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 20px 20px 60px 20px;
    transform:rotate(20deg) translate(-1px,0);
    margin-top:38px;
}

.right2:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
    transform:rotate(29deg) translate(-8px,0);
    height:30%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 0px 0px 60px 70px;
    margin-top:66px;
}

/* left wing */

.left2 {
    position:absolute;
    left:970px;
    top:380px;
    border-radius:12px 20px 20px 60px;
    animation:flap22 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    transform:rotate(10deg) translate(-248px, 0);
}

@keyframes flap22 {
    0% {
        transform:rotate(10deg) translate(-248px,0);
    }
    
    50% {
        transform:rotate(5deg) translate(-248px,0);
    }
}


.left2:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    transform:translate(46%,0) rotate(-20deg);
    height:60%;
      border-radius:12px 20px 70px 70px;
    margin-top:40px;
}

.left2:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
       border-bottom:3px solid rgba(0,0,0,.08);
    height:30%;
     transform:translate(164%,0) rotate(-34deg);
     border-radius:0px 0px 70px 60px;
    margin-top:58px;
}

/* heart */
.heart2:hover{
  cursor: pointer;
}

.heart2{
    position: absolute;
    top:380px;
    left:950px;
    width: 120px;
    z-index:1;
    height: 100px;
    animation: heart2 1s infinite;
    transform:scale(.8);
    transition:.6s;
    margin-top:60px;
    
}
.heart2:before,
.heart2:after{
    content: "";
    width: 50px;
    height: 80px;
    position: absolute;
    left: 50px;
    top: 0;
    border-radius: 50px 50px 6px 6px;
    background: orange;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}
.heart2:after{
    left: 0;
    transform: rotate(45deg);
    transform-origin :100% 100%;
}

@keyframes heart2 {
    0% {
        transform: scale(.8) translate(0,0);
    }
    
    50% {
        transform: scale(.92) translate(0, 12px);
    }
    
    100% {
        transform:scale(.8);
    }
}

/* envelope */

  #envelope2 {
  background: white; 
  margin: 200px auto;
  height: 200*0.8px;
  position: absolute;
  bottom:270px;
  left:870px;
  width: 320*0.8px;
  border-radius:8px;
  overflow:hidden;
  animation: floaty1 1s infinite;
}

@keyframes floaty1 {
    0% {
        transform:translate(0,0);
    }
    
    50% {
        transform:translate(0, 12px);
    }
}



</style>