<template>
  <div class="root">
    <MessageBox/>
    <b-container fluid class="mess-bottom">
      <div class="mess-btn">Send</div><div class="mess-btn">Receive</div>
        
    </b-container>
  </div>
</template>

<script>
import MessageBox from "./MessageBox"

export default {
  name: 'MessageFrame',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root{
  background: url("../assets/bg.jpg");
  height: 100%;
  width: 100%;
  position: fixed;
  left: 300px;
}

.mess-bottom{
  bottom: 0;
  position: fixed;
  background: transparent;
  height: 100px;
  width: 100%;
  text-align: left;}

.mess-btn{
  width: 20%;
  float: left;
  height: 80px;
  text-align: center;
  margin-left: 15%;
  border: 1px solid #ddd;
  padding-top: 20px;
  font-size: 24px;
  color: #aaa;
  cursor: pointer;

}

.message-box{
  width: 50%;
  height: 70%;
  background: #fff;
  border-radius: 20px;
  margin: 60px 15%;
  box-shadow: 0 4px 8px 0 #6db9d4b7, 0 6px 20px 0 #468aa375;
}

</style>
