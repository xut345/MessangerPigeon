<template>
    <div>

      <ui-button class="self-btn" id="sendBtn" @click="openModal('sendMessage')">  <div class="send-btn">  SEND </div> </ui-button>
      <ui-button class="self-btn" id="receiveBtn"  @click="receiveRandomMessageBox()"> <div class="receive-btn">  RECEIVE </div> </ui-button>
      
        <ui-modal ref="sendMessage" title="New Pigeon"  size="large" align-top :align-top-margin="200">
                   
            <div>
                 <b-alert :show="showAlert" @dismissed="showAlert=false">You must type your Pigion's topic, quantity and content.</b-alert>
                <b-form-group label="Title">
                <b-form-input v-model="title" type="text" placeholder="Enter your title"></b-form-input>
                </b-form-group>
                
                <b-form-group label="Type">
                <b-form-radio-group id="btnradios2"
                                    buttons
                                    button-variant="outline-primary"
                                    v-model="selected"
                                    :options="options"
                                    name="radioBtnOutline" />
                </b-form-group>


                <b-form-group label="Message">
                <b-form-textarea id="textarea1"
                        v-model="content"
                        placeholder="Enter something..."
                        :rows="10"
                        :max-rows="10">
                </b-form-textarea>
                </b-form-group>
                <b-button id="sendAPigeonBtn"  @click="sendNewMessageBox('sendMessage')" size="lg" variant="outline-primary" style="float:right" > Send </b-button>
            </div>
        </ui-modal>
        <Envelope v-show="show" id="envelop"/>
    </div>
</template>

<script>
import Envelope from "./Envelope"
import FlyingBirds from "./FlyingBirds"
import PigeonService from '@/services/PigeonService'

import {mapActions, mapGetters} from 'vuex'
import { setTimeout } from 'timers';

export default {
  name: 'MessageBox',
  components:{
       Envelope,
       FlyingBirds
  },
  data(){
    return{
      show:false,
      title: '',
      content:'',
      selected: false,
      options: [
        { text: 'Public', value: true },
        { text: 'Private', value: false }
      ],
      showAlert:false
    }
  },
  methods: {
    openModal(ref) {
        this.$refs[ref].open();
    },
    closeModal(ref) {
        this.$refs[ref].close();
    },
    receiveRandomMessageBox: function(){
        this.show = !this.show;   
    },
    async sendPigeon (data) {        
      try {
        await PigeonService.sendPigeon(data)
      }
      catch (error){
      }
    },
    sendNewMessageBox(ref){
        if(this.title.length==0 || this.content.length==0 || this.selected1===null){
            this.showAlert=true
        }
        else{
            this.closeModal(ref);
            this.showAlert = false
            var newPigeon = {
                name:this.user,
                topic:this.title,
                message_content:this.content,
                isPublic:this.selected,
            }
            this.sendPigeon(newPigeon)
            this.title = ''
            this.content = ''
            this.selected = false
        }

    }
  },
    computed: {
      ...mapGetters(['user'])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.self-btn{
    background:#f8f9fa !important;
    width:0px;
    height:0px;
    margin-left:600px
}


.send-btn:hover, .receive-btn:hover{
  border: 20px solid #ffffff;
  cursor: pointer;
  background: #71ce9f;
}

.send-btn{
    bottom:300px;
    left: 320px;
	transform: rotate(-10deg);
	-ms-transform: rotate(-10deg);       /* IE 9 */
	-webkit-transform: rotate(-10deg);   /* Safari and Chrome */
	-o-transform: rotate(-10deg);        /* Opera */
	-moz-transform: rotate(-10deg);      /*firefox*/
}

.receive-btn{
    bottom:180px;
    left: 580px;
	transform: rotate(40deg);
	-ms-transform: rotate(40deg);       /* IE 9 */
	-webkit-transform: rotate(40deg);   /* Safari and Chrome */
	-o-transform: rotate(40deg);        /* Opera */
	-moz-transform: rotate(40deg);      /*firefox*/
}

.send-btn, .receive-btn {
	
    font-size: 30px;
    color:white;
    padding-top: 60px;
    font-weight: 600;
    transition: border 1s;
	position: fixed;
	display: inline-block;
	text-align: center;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 20px solid #fcece5;
	box-sizing: border-box;
	background: transparent;
	overflow: hidden;
	box-shadow: inset 0 0 80px rgba(0,0,0,.5),
										0 0 20px rgba(0,0,0,.3);
	&:before, &:after {
		position: absolute;
		content: "";
 		box-sizing: border-box;
		border-radius: 50%;
		z-index: 10;
	}
	&:before {
		height: 94%;
		width: 94%;
		top:3%;
		right: 3%;
		border: 10px solid transparent;
		border-right-color: rgba(255,255,255,.3);
		border-right-width: 10px;
		border-right-style: solid;

	}
	&:after {
		top: 50px;
		right: 65px;
		width: 10px;
		height: 10px;
		background: rgba(255,255,255,.3);
  
	
	}
}

</style>
