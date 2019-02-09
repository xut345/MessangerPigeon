<template>
<div>
    <div class="envelope-box">
        <div class="wing1 left1"></div>
        <div class="wing1 right1"></div>
        <div class="wing2 left2"></div>
        <div class="wing2 right2"></div>
        <div class="envelope1">
            <div class="heart1" @click="openModal('receiveMessage')"></div>
        </div>
        <div class="envelope2">
            <div class="heart2" @click="openModal('receiveMessage')"></div>
        </div>
    </div>
  <ui-modal ref="receiveMessage" title="Message title"  size="middle" align-top :align-top-margin="200">
            <div>
                <b-form-text id="textarea1"><h2>Hello!</h2></b-form-text>
                <b-button  @click="closeModal('receiveMessage')" size="lg" variant="outline-primary" style="float:left" > Reject </b-button>
                <b-button  @click="closeModal('receiveMessage')" size="lg" variant="outline-primary" style="float:right" > Respond </b-button>
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

  .envelope-box{
      position:fixed;
      height:450px;
      width:600px;
      right:2%;
      top: 2%;
  }

.envelope1, .envelope2 {
  background: white; 
  left: 25%;
  height: 150px;
  width: 250px;
  position: absolute;
  border-radius:8px;
  overflow:hidden;
  animation: floaty 1s infinite;
  box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

.envelope1{
   top:10%;
  }
.envelope2 {
  bottom:10%;
}


@keyframes floaty {
    0% {
        transform:translate(0,0);
    }
    
    50% {
        transform:translate(0, 5px);
    }
}

/* wings */

.wing1 {
    background:white;
    width:100px;
    height:35px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* right wing */

.right1 {
    background:white;
    width:100px;
    height:35px;
    position: absolute;
    right: 12%;
    top: 20%;
    animation:flap 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 12px 20px 60px 20px;
    transform:rotate(-10deg);
}

@keyframes flap {
    0% {
        transform:rotate(-10deg);
    }
    
    50% {
        transform:rotate(-5deg);
    }
}
.right1:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
    height:80%;
    border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 20px 20px 60px 20px;
    transform:rotate(20deg) translate(-1px,0);
    margin-top:30px;
    
}

.right1:after {
    position:absolute;
    content:'';
    background:white;
    width:40%;
    transform:rotate(29deg) translate(-8px,0);
    height:45%;
    border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 0px 0px 60px 70px;
    margin-top:50px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* left wing */

.left1 {
    position:absolute;
    left:5%;
    top:20%;
    border-radius:12px 20px 20px 60px;
    animation:flap2 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    transform:rotate(10deg);
}

@keyframes flap2 {
    0% {
        transform:rotate(10deg);
    }
    
    50% {
        transform:rotate(5deg);
    }
}


.left1:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    transform:translate(46%,0) rotate(-20deg);
    height:80%;
      border-radius:12px 20px 70px 70px;
    margin-top:30px;
}

.left1:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
       border-bottom:3px solid rgba(0,0,0,.08);
    height:45%;
     transform:translate(164%,0) rotate(-34deg);
     border-radius:0px 0px 70px 60px;
    margin-top:46px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* heart */
.heart1:hover{
  cursor: pointer;
}
.heart1{
    position: absolute;
    margin: 10% auto;
    left: 30%;
    height: 100px;
    width: 120px;
    z-index:1;
    animation: heart2 1s infinite;
    transform:scale(.8);
    transition:.6s;
    
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
    background: rgb(201, 56, 75);
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
        transform: scale(.85) translate(0,5px);
    }
    
    100% {
        transform:scale(.8);
    }
}




.wing2 {
    background:white;
     border-radius: 12px 20px 60px 20px;
     width:100px;
     height:35px;
     box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* right wing */

.right2 {
    position:absolute;
    right:12%;
    bottom:28%;
    animation:flap11 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
     border-radius: 12px 20px 60px 20px;
    transform:rotate(-10deg);
}

@keyframes flap11 {
    0% {
        transform:rotate(-10deg);
    }
    
    50% {
        transform:rotate(-5deg);
    }
}
.right2:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
    height:80%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 20px 20px 60px 20px;
    transform:rotate(20deg) translate(-1px,0);
    margin-top:30px;
}

.right2:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
    transform:rotate(29deg) translate(-8px,0);
    height:45%;
       border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 0px 0px 60px 70px;
    margin-top:50px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* left wing */

.left2 {
    position:absolute;
    left:5%;
    bottom:28%;
    border-radius:12px 20px 20px 60px;
    animation:flap22 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    transform:rotate(10deg);
}

@keyframes flap22 {
    0% {
        transform:rotate(10deg);
    }
    
    50% {
        transform:rotate(5deg);
    }
}


.left2:before {
    position:absolute;
    content:'';
    background:white;
    width:70%;
       border-bottom:3px solid rgba(0,0,0,.08);
    transform:translate(46%,0) rotate(-20deg);
    height:80%;
      border-radius:12px 20px 70px 70px;
    margin-top:30px;
}

.left2:after {
      position:absolute;
    content:'';
    background:white;
    width:40%;
       border-bottom:3px solid rgba(0,0,0,.08);
    height:45%;
     transform:translate(164%,0) rotate(-34deg);
     border-radius:0px 0px 70px 60px;
    margin-top:46px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* heart */
.heart2:hover{
  cursor: pointer;
}

.heart2{
    position: absolute;
    margin:10% auto;
    left: 30%;
    height: 100px;
    width: 120px;
    z-index:1;
    animation: heart2 1s infinite;
    transform:scale(.8);
    transition:.6s;
    
}
.heart2:before,
.heart2:after{
    content: "";
    width: 50px;
    height: 80px;
    position: fixed;
    left: 50px;
    top: 0;
    border-radius: 50px 50px 6px 6px;
    background: rgb(55, 161, 231);
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
        transform: scale(.85) translate(0, 5px);
    }
    
    100% {
        transform:scale(.8);
    }
}



</style>