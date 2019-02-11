<template>
 <b-container fluid >
        <b-row class="header">
          <b-col>
            <b-img thumbnail width="100px" fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
          </b-col>
          <b-col>
            <h3 style="margin-top:30px">{{user==null?"aaa":user}}</h3>
          </b-col>
        </b-row>
        <b-row class="message-bar" >
            <b-col class="mess-item" >Message</b-col>
        </b-row>
        <b-row class="nav-bar" >
            <b-col class="nav-item">Friends</b-col>
            <b-col class="nav-item">Chat</b-col>
        </b-row>
       
      </b-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
      ...mapGetters(['user','token'])
  },
 
}
</script>

<style scoped>

.header{
    border-bottom: 1px solid #d8d8d8;
    padding-bottom: 20px;
    padding-top: 20px;
}

.nav-bar{
    border-bottom: 1px solid #0587a846;
    margin-bottom: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
}

.message-bar{
    border-top: 1px solid #0587a846;
    border-bottom: 1px solid #0587a846;
    padding-bottom: 10px;
    padding-top: 10px; 
}

.nav-item:nth-child(-n+1){
    border-right: 1px solid #0587a846;
}

.nav-item,.mess-item{
    color:#555;
    height: 100%;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
   
}

.nav-item:hover,.mess-item:hover{
    color: #0588a8;
}

</style>
