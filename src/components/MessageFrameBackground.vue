<template>
<div class="body">   
    <div class="main">         
        <div class="slide-content" id="slide_content">  </div>
    </div>  
</div>
</template>

<script>

</script>

<style scoped>

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


::-webkit-scrollbar{width:12px;height:12px}
::-webkit-scrollbar-button:vertical{display:none}
::-webkit-scrollbar-track:vertical{background-color:black}
::-webkit-scrollbar-track-piece{background: #FDFDFD;}
::-webkit-scrollbar-thumb:vertical{background-color:#8E8E8E;border-radius:5px}
::-webkit-scrollbar-thumb:vertical:hover{background-color:#3B3B3B}
::-webkit-scrollbar-corner:vertical{background-color:#535353}
::-webkit-scrollbar-resizer:vertical{background-color:#FF6E00}


@-webkit-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-moz-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-ms-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-o-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-webkit-keyframes stage-0 {from{-webkit-transform:scale(0.01);}to{-webkit-transform:scale(1);}}
@keyframes stage-0 { from{transform:scale(0.01);}to{transform:scale(1);}}
@-moz-keyframes stage-0 { from{-moz-transform:scale(0.01);}to{-moz-transform:scale(1);}}
@-o-keyframes stage-0 { from{-o-transform:scale(0.01);}to{-o-transform:scale(1);}}


.body{
   background:url(../assets/images/cloud.png) 0 bottom repeat-x  #049ec4;
   -webkit-animation: animate-cloud 20s linear infinite;
   -moz-animation: animate-cloud 20s linear infinite;
   -ms-animation: animate-cloud 20s linear infinite;
   -o-animation: animate-cloud 20s linear infinite;
   animation: animate-cloud 20s linear infinite;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 300px;
}
.main{ position:relative;}
.main .slide-content{width:100%;min-width:980px;height:100%; min-height:640px;position: relative;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;overflow: hidden;}
.main .slide-content .cloud{ position:absolute; width:200px;height:100px; background:url(../assets/images/object.png);left:0px;top:0px;}
.main .slide-content .cloud-0{background-position: -580px -240px;}
.main .slide-content .cloud-1{background-position: -550px 0px;height:140px;width:260px;}
.main .slide-content .cloud-2{background-position: -580px -140px;}
.main .slide-content .cloud-3{background-position: -350px -140px;}
.main .slide-content .cloud-4{background-position: -350px 0px;height:140px;}

.clear{
    clear:both;
}

</style>
