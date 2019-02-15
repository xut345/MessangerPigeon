<template>
    <div>
      <div class="globe" v-on:click="showOption">
        <BirdLogo />
        <div class="hills"></div>
        <div class="cloud"></div>
        <div class="cloud small"></div>
        <div class="wire"></div>
      </div>
      
      <MessageBox v-show="active"/>

    </div>


</template>

<script>
import BirdLogo from "./BirdLogo"
import MessageBox from "./MessageBox"

export default {
  components:{
  MessageBox,
  BirdLogo
  },
  data(){
    return{
        active: false
    }
  },
  methods: {
      showOption: function(){
          this.active = !this.active;   
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$timeline: (
 'begin'         : 0s,
 'eye-p0-1'      : 0.4s,
 'eye-p1-1'		 : 0.4s,
 'eye-p4-1'      : 1.8s,
 'eye-p3-1'      : 0.4s,
 'eye-p4-2'      : 1s,
 'eye-p2-1'      : 0.1s,
 'end'           : 0.4s
);

$totaltime: 0s;
$timelineAccumulated: ();
@each $key, $time in $timeline {
	$totaltime: $totaltime + $time;
	$timelineAccumulated: map-merge($timelineAccumulated, ($key : $totaltime) );
}

.globe:hover{
  border: 20px solid #ffffff;
  cursor: pointer;
  background: #f59bc5;
}

.globe {
  transition: background 0.5s;
	bottom: 30px;
  left: 330px;
	position: fixed;
	display: inline-block;
	text-align: left;
	width: 250px;
	height: 250px;
	border-radius: 50%;
	border: 20px solid #fff0ea;
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
  @keyframes cloud {
	0% {
		left: -140px;
	}
	100% {
		left: 280px;
	}
  }
  .hills {
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 30%;
		top: 150px;
		left: 60px;
		transform: rotate(45deg);
		background: radial-gradient(ellipse at top left, rgba(170,217,93,1) 0%,rgba(187,195,105,1) 100%);
		box-shadow: inset 5px 0 12px rgba(0,0,0,.2);
		&:before, &:after {
			position: absolute;
			content: "";
			width: 178px;
			height: 90px;
			border-radius: 50%;
			background: inherit;
			box-shadow: inherit;
		}
		&:before {
			left: -90px;
			top: 30px;
			z-index: -1;
			transform: rotate(-20deg);
		}
		&:after {
			left: 0px;
			top: -55px;
			transform: rotate(120deg);
		}
	}

	.cloud {
		position: absolute;
		width: 70px;
		height: 24px;
		background: linear-gradient(to bottom,
								rgba(242,249,254,1) 5%,
								rgba(214,240,253,1) 100%);
		border-radius: 20px;
		top:20px;
		z-index: -1;
		animation: cloud $totaltime*2 linear infinite;
		&.small {
			top:50px;
			transform: scale(.6);
			animation-delay: -$totaltime/3;
			animation-duration: $totaltime*3;
		}
		&:before, &:after {
			position: absolute;
			content: "";
			background: inherit;
			z-index: -1;
		}
		&:before {
			width: 36px;
			height: 36px;
			top: -18px;
			right: 10px;
			border-radius: 40px;
		}
		&:after {
			width: 20px;
			height: 20px;
			top: -10px;
			left: 10px;
			border-radius: 20px;
		}
	}
  .wire {
		position: absolute;
		z-index: 0;
		width: 260px;
		height: 200px;
		left: -25px;
		top: -19px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-bottom-color: rgb(87, 56, 42);
	}
}

</style>
