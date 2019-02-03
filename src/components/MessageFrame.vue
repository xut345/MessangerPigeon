<template>
  <div class="root">

    <b-container fluid class="mess-bottom">
      <div class="mess-btn">Send</div><div class="mess-btn">Receive</div>
        
    </b-container>
  </div>
</template>

<script>
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

</style>
