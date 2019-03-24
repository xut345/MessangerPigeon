<template>
<div>
    <div class="mess-fun">
        <ui-switch class="switch" v-model="switch1" >{{switch1?"Public":"Private"}}    </ui-switch> 
    </div>
    <div v-if="this.userPigeonList" class="mess-list">
        <div class="mess" v-for="pigeon in this.userPigeonList.filter(pigeon=>{
          return pigeon.is_public===this.switch1})" v-bind:key="pigeon.id" @click="openPigeon(pigeon)" id="choosethepigeon">{{pigeon.topic}} </div>
    </div>
    <ui-modal class="pigeon" ref="openPigeon" title=" " size="large" align-top :align-top-margin="100">
      <div>
        <b-form-text id="textarea1">
          <div class="message-topic">{{this.clickedPigeon.topic}}</div>
          <b-container v-for="mess in this.userPigeonMessageList" v-bind:key="mess.id">
            <div v-if="mess.sent_by===currUser">
              <b-row >
                <b-col></b-col>
                <b-col><div class="message-bar-right"  >{{mess.message_contents}}</div></b-col>
              </b-row>
              <b-row>
                <b-col></b-col>
                <b-col><div class="message-user"> From {{mess.sent_by}}</div></b-col>
              </b-row>
            </div>

            <div v-if="mess.sent_by!==currUser">
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

      <div v-if="this.userPigeonMessageList">
 <div v-if="this.userPigeonMessageList[this.userPigeonMessageList.length-1].sent_by===this.user" class=modal-fun>
        
        <p class="pigeon-sent-info">Pigeon has not come back</p>
      </div>

      <div v-if="this.userPigeonMessageList[this.userPigeonMessageList.length-1].sent_by!==this.user" class=modal-fun>
       123 <b-button  @click="openModal('respondMessage')" id="opentheModal" size="lg" variant="outline-primary" style="float:right" > Respond </b-button>
      </div>

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
            <b-button  @click="closeRespondMessageBox('respondMessage')"  id = "closeMessageBox" size="lg" variant="outline-primary" style="float:left" > Cancel </b-button>
            <b-button  @click="sendResponseMessageBox('respondMessage')" id = "sendMessageBox"size="lg" variant="outline-primary" style="float:right" > Respond </b-button>
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
    data(){
        return{
          content:'',
          currUser:"",
          clickedPigeon:"",
          sent_by: "",
          switch1:false,
          showAlert:false,
        }
    },
    methods:{
      openModal(ref) {
        this.$refs[ref].open();
      },
      closeModal(ref) {
        this.$refs[ref].close();
      },
      async openPigeon(pigeon){
        this.currUser = this.user
        this.sent_by = pigeon.sent_by
        this.clickedPigeon = pigeon
        await PigeonService.getPigeonMessage(pigeon.id, true)
        this.openModal('openPigeon')
      },
      async sendResponse (data) {

        try {
          const response = await PigeonService.respondPigeon(data)

        }
        catch (error){
          console.log(error)
        }
      },
      sendResponseMessageBox(ref){
        if(!this.content || !this.content.trim()){
          this.showAlert=true
        }
        else{
          this.showAlert=false
          var newMessage = {
            id: this.clickedPigeon.id,
            name: this.user,
            message_content: this.content,
          }
          this.sendResponse(newMessage)
          this.closeModal(ref)
          this.content = ''
        }
      },
      closeRespondMessageBox(ref){
        this.showAlert=false
        this.closeModal(ref)
        this.content = ''
      },
    },
    async mounted(){
      await PigeonService.getPigeonList(this.user)
    },
    computed: {
      ...mapGetters(['userPigeonList','userPigeonMessageList','user'])
  }
}
</script>

<style scoped>
  .pigeon{
    overflow: visible;
  }
  .mess-list{
    overflow-y: auto;
    overflow-x: hidden;
    max-height:60%;
    width: 100%;
    opacity: 0.9;
    white-space:nowrap;
    position: absolute;
    cursor: pointer;
}

.mess{
    padding-left: 20px;
    height: 50px;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding-top: 15px;
}

.mess:hover{
    background: #059dc317;
}

.mess-fun{
    text-align: center;
    margin-bottom: 20px;
    height: 20px;
    padding-right: 20px;
}

.switch{
    margin-left: 20px;
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

  .message-user{
    color: #bbb;
    float: right;
  }

  .modal-fun{
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 30px;
  }

  .pigeon-sent-info{
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #555;
  }
</style>
