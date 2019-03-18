<template>
<div>
    <div class="envelope-box">
        <div class="wing1 left1"></div>
        <div class="wing1 right1"></div>
        <div class="wing2 left2"></div>
        <div class="wing2 right2"></div>
        <div class="envelope1">
            <abbr title="Public Message"><div class="heart1"  @click="openPrivateMessageBox('receiveMessage')"></div></abbr>
        </div>
        <div class="envelope2">
            <abbr title="Private Message"><div class="heart2"  @click="openPublicMessageBox('receiveMessage')"></div></abbr>
        </div>
    </div>
    <ui-modal ref="receiveMessage" title= "New Pigeon"  size="large" align-top :align-top-margin="100">
        <div>
            <b-form-text id="textarea1">
                <div class="message-topic">{{this.toBePickUpMessageList==null?"":this.toBePickUpMessageList.topic}}</div>

                <b-container v-for="mess in this.toBePickUpMessageList==null?null:this.toBePickUpMessageList.messages" v-bind:key="mess.id">
                    <div v-if="mess.sent_by===user">
                    <b-row >
                        <b-col></b-col>
                        <b-col><div class="message-bar-right"  >{{mess.message_contents}}</div></b-col>
                    </b-row>
                    <b-row>
                        <b-col></b-col>
                        <b-col><div class="message-user"> From {{mess.sent_by}}</div></b-col>
                    </b-row>
                    </div>

                    <div v-if="mess.sent_by!==user">
                    <b-row >
                        <b-col> <div class="message-bar"  >{{mess.message_contents}}</div> </b-col>
                        <b-col></b-col>
                    </b-row>
                    <b-row>
                        <b-col> <div class="message-user-right"> From {{mess.sent_by}}</div> </b-col>
                        <b-col></b-col>
                    </b-row>
                    </div>
                </b-container> 
            </b-form-text>
        </div>
        <div class="modal-fun">
            <b-button  v-if="this.ableToReject" @click="rejectPigeon('receiveMessage')" size="lg" variant="outline-primary" style="float:left" > Reject </b-button>
            <b-button  @click="openModal('respondMessage')" size="lg" variant="outline-primary" style="float:right" > Respond </b-button>
        </div>
        <div>
            <ui-modal ref="respondMessage" title= "Respond"  size="large" align-top :align-top-margin="100">
                <div>
                    <b-alert :show="showAlert" @dismissed="showAlert=false">You must type your content.</b-alert>
                    <b-form-group label="Message">
                    <b-form-textarea id="textarea1"
                        v-model="content"
                        placeholder="Enter something..."
                        :rows="5"
                        >
                    </b-form-textarea>
                </b-form-group>
                <b-button  @click="closeRespondMessageBox('respondMessage')" size="lg" variant="outline-primary" style="float:left" > Cancel </b-button>
                <b-button  @click="sendResponseMessageBox('respondMessage')" size="lg" variant="outline-primary" style="float:right" > Respond </b-button>
                </div>
            </ui-modal>
        </div>
    </ui-modal>
  
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PigeonService from '@/services/PigeonService'


export default {
  name: 'Envelope',
  components:{
  },
  data(){
    return{
        ableToReject:true,
        content:'',
        showAlert:false,
    }
  },
  methods: {
    ...mapActions( 
        ['addPigeonToList']
    ),
    openModal(ref) {
        this.$refs[ref].open();
    },
    closeModal(ref) {
        this.$refs[ref].close();
    },
    openPrivateMessageBox(ref){
        var newPrivateMessage = {
            name: this.user,
            is_public:false,
        }
        this.assignPigeon(newPrivateMessage)
        this.openModal(ref)
    },
    openPublicMessageBox(ref){
        var newPublicMessage = {
            name: this.user,
            is_public:true,
        }
        this.assignPigeon(newPublicMessage)
        this.openModal(ref)
    },
    sendResponseMessageBox(ref){
        if(this.content.length==0){
            this.showAlert=true
        }
        else{
            this.showAlert=false
            this.ableToReject=false
            var newContent = {
                id: this.toBePickUpMessageList.id,
                name: this.user,
                message_content: this.content,
            }
            this.sendResponse(newContent)
            this.addPigeonToList(this.toBePickUpMessageList)
            this.closeModal(ref)
            this.content = ''
        }
    },
    closeRespondMessageBox(ref){
        this.showAlert=false
        this.closeModal(ref)
        this.content = ''
    },
    async assignPigeon (data) {
        
      try {
        const response = await PigeonService.assignPigeon(data)

      }
      catch (error){
          console.log(error)
      }
    },
    async sendResponse (data) {
        
      try {
        const response = await PigeonService.sendResponse(data)
        console.log(response)

      }
      catch (error){
          console.log(error)
      }
    },
    async rejectPigeon(ref){
      try {
        this.closeModal(ref)
        var rejectInfo = {
          id: this.toBePickUpMessageList.id,
          name: this.user,
        }
        await PigeonService.declineMessage(rejectInfo)
      }catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
        ...mapGetters(['toBePickUpMessageList','user'])
    }
}
</script>

<style lang="scss" scoped>

  .envelope-box{
      z-index: 1;
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

.wing1,.wing2 {
    background:white;
    border-radius: 12px 20px 60px 20px;
    width:100px;
    height:35px;
    box-shadow: 0 4px 8px 0 #047a97b4, 0 6px 20px 0 #047a9762;
}

/* right wing */

.right1,.right2 {
    background:white;
    width:100px;
    height:35px;
    position: absolute;
    right: 13%;
    animation:flap 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    border-radius: 12px 20px 60px 20px;
    transform:rotate(-10deg);
}

.right1{
    top:20%;
}

.right2{
    bottom:28%;
}

@keyframes flap {
    0% {
        transform:rotate(-10deg);
    }
    
    50% {
        transform:rotate(-5deg);
    }
}

.right1:before,.right2:before{
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

.right1:after,.right2:after {
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

.left1,.left2 {
    position:absolute;
    left:5%;
    border-radius:12px 20px 20px 60px;
    animation:flap2 1s infinite;
    border-bottom:3px solid rgba(0,0,0,.08);
    transform:rotate(10deg);
}

.left1{
    top:20%;
}
.left2 {
    bottom:28%;
}

@keyframes flap2 {
    0% {
        transform:rotate(10deg);
    }
    
    50% {
        transform:rotate(5deg);
    }
}


.left1:before,.left2:before {
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

.left1:after,.left2:after {
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
.heart1:hover,.heart2:hover{
  cursor: pointer;
}
.heart1,.heart2{
    position: absolute;
    margin: 10% auto;
    left: 30%;
    height: 100px;
    width: 120px;
    z-index:1;
    animation: heart 1s infinite;
    transform:scale(.8);
    transition:.6s;
    
}
.heart1:before,.heart1:after,.heart2:before,.heart2:after{
    content: "";
    width: 50px;
    height: 80px;
    position: absolute;
    left: 50px;
    top: 0;
    border-radius: 50px 50px 6px 6px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}

.heart1:before,.heart1:after{
    background: rgb(201, 56, 75);
}

.heart2:before,.heart2:after{
    background: rgb(55, 161, 231);
}

.heart1:after,.heart2:after{
    left: 0;
    transform: rotate(45deg);
    transform-origin :100% 100%;
}

@keyframes heart {
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

.message-topic{
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 30px;
    padding-top: 30px;
    border-bottom: 1px solid #eee;
    color: #555
}

.message-bar, .message-bar-right{
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    float: left;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 #c9c9c9b4, 0 2px 5px 0 #f1f1f1b4;
}
.message-bar-right{
    background: rgb(4, 158, 196);
    color: white
}


.modal-fun{
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 30px;
}

.message-user{
    color: #bbb;
    float: right;
}

.message-user-right{
    color: #bbb;
    float: left;
}

.message-bar-box{
    width: 100%;
}


.message-bar-null{
    width: 50%;
    height: auto;
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    float: left;
    color: transparent
}

.message-user-null{
    color: #bbb;
    width: 50%;
    float: left;
}



</style>
