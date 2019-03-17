<template>
    <div>
        <div class="bird">
          <div class="body">
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="beak"><div></div></div>
            <div class="feet"></div>
          </div>
        </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$birdColor: #11e7d7;
$birdColor2: #31bfae;
$birdColor3: #01c7be;
$feetColor: #f8c14d;
$beakColor: #f7d35d;
$beakColor2: #eb9f2d;

$birdColor3: #01c7be;

// Storyboard Timeline
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


// $totaltime:						Total of all timecodes in $timeline
// $timelineAccumulated:	Accumulated timeline map based on $timeline
$totaltime: 0s;
$timelineAccumulated: ();
@each $key, $time in $timeline {
	$totaltime: $totaltime + $time;
	$timelineAccumulated: map-merge($timelineAccumulated, ($key : $totaltime) );
}

// Timecode to Percent function
// Params:
// 	$key:			key/position in timeline
// 	$offset:	optional offset to add to time from timeline (use negative number to subtract)
// Return: 		Percentage value of keyposition in timeline.
@function tp($key, $offset: 0s) {
	@return (map-get($timelineAccumulated, $key) + $offset) / $totaltime * 100%;
}


@keyframes eyes {
	#{tp('begin')},
	#{tp('eye-p0-1')},
    #{tp('end')} {
   	top: -50px;
	}
	#{tp('eye-p1-1')} {
   	top: -45px;
	}
	#{tp('eye-p2-1')} {
   	top: -20px;
	}
	#{tp('eye-p4-1')},
	#{tp('eye-p4-2')} {
   	top: -15px;
	}
	#{tp('eye-p3-1')} {
    top: -25px;
	}
}
@keyframes wings {
	#{tp('begin')},
	#{tp('eye-p4-2')},
  #{tp('end')} {
		top: 70px;
	}
	#{tp('eye-p2-1')} {
		top: 60px;
	}
}

@keyframes feet {
	#{tp('begin')},
	#{tp('eye-p4-2')},
  #{tp('end')} {
		top: -2px;
	}
	#{tp('eye-p2-1')} {
		top: 0px;
	}
}

.bird {
	position: absolute;
	z-index: 1;
	left: 45px;
	top: 40px;
	.body {
		position: absolute;
		width: 125px;
		height: 136px;
		border-radius: 50%;
		background-clip: padding-box;
		background-color: $birdColor;
		box-shadow: inset 0 0 80px rgba(0,0,0,.3);
		&:before, &:after {
			position: absolute;
			content: "";
			z-index: -1;
			width: 26px;
			height: 53px;
			border-radius: 50%;
			background-color: $birdColor;
			box-shadow: inset 0 0 13px rgba(0,0,0,.3);
			top: 70px;
			animation: wings $totaltime linear infinite;
		}
		&:before {
			left: 0;
		}
		&:after {
			right: 0;
	  }
		.eye {
			position: absolute;
			z-index: 1;
			overflow: hidden;
			width: 36px;
			height: 36px;
			top:28px;
			border-radius: 50%;
			background-color: #fff;
			border: 1px solid $birdColor3;
			box-shadow: inset 0 0 0 1px $birdColor3;
			&:before, &:after {
				position: absolute;
				content: "";
			}
			&:before {
				width: 18px;
				height: 18px;
				border-radius: 50%;
				background-color: #000;
				top: 20px;
			}
			&:after {
				width: 200px;
				height: 200px;
				background: radial-gradient(ellipse at center,
				rgba(109,0,25,0) 0%,
				rgba(130,1,31,0) 35%,
				$birdColor3 36%,
				$birdColor2 100%);
				animation: eyes $totaltime linear infinite;
			}
			&.left {
				left: 15px;
				&:before {
					left: 20px;
				}
				&:after {
	 				left: -60px;
		    		top: -45px;
				}
			}
			&.right {
				right: 15px;
				&:before {
					right: 20px;
				}
				&:after {
	 				right: -60px;
	    		top: -45px;
				}
			}
		}
		.beak {
			position: absolute;
			z-index: 1;
			width: 21px;
			height: 25px;
			top: 70px;
			left: 67px;
			border-radius: 50%;
			&:before {
				position: absolute;
				content: "";
				width: inherit;
				height: inherit;
				top: -5px;
                left:-15px;
				border-radius: 50%;
				background: $beakColor2;
			}		
			div {
				position: absolute;
				width: 23px;
				height: 23px;
				top: -8px;
				left: -15px;
				border-radius: 50% 60% 50%  40%;
				background-clip: padding-box;
				background-color: $beakColor;
				transform: rotate(-45deg);
				&:before {
					position: absolute;
					content: "";
					transform: rotate(45deg);
					width: 9px;
					height: 8px;
					top: 4px;
					left: 7px;
					border-radius: 50%;
					background-color: #fff;
				}
			}
		}
		.feet {
			position: absolute;
			bottom: 8px;
			width: 100%;
			&:before, &:after {
				position: absolute;
				content: "";
				width: 15px;
				height: 11px;
				border-radius: 50%;
				background-color: $feetColor;
				box-shadow: inset 0 0 12px rgba(0,0,0,.2);
				animation: feet $totaltime linear infinite;
			}
			&:before {
				left: 40px;
			}
			&:after {
				right: 40px;
			}
		}
	}
}
</style>
