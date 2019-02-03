<template>
 <b-container fluid class="bg-light">
        <b-row class="header">
          <b-col>
            <b-img thumbnail width="100px" fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
          </b-col>
          <b-col>
            <h3 style="margin-top:30px">Bracio</h3>
          </b-col>
        </b-row>
        <b-row class="nav-bar" >
            <b-col class="nav-item" >Message</b-col>
            <b-col class="nav-item">Friends</b-col>
            <b-col class="nav-item">Chat</b-col>
        </b-row>
       
      </b-container>
</template>

<script>
export default {
 
}
</script>

<style scoped>

.header{
    border-bottom: 1px solid #d8d8d8;
    padding-bottom: 20px;
    padding-top: 20px;
}

.nav-bar{
    border-bottom: 1px solid #d8d8d8;
    background: #36768db7;
    margin-bottom: 20px;
     padding-bottom: 20px;
    padding-top: 20px;
}

.nav-item:nth-child(-n+2){
    border-right: 1px solid white;
}

.nav-item{
    color:white;
    height: 100%;

    cursor: pointer;
    text-align: center;
    font-weight: 600;
}

.nav-item:hover{
    color: #555;
}

</style>
