<template>
<div class="body">   
    <div class="main">         
        <div class="slide-content" id="slide_content">  </div>
    </div>  
</div>
</template>

<script>

jQuery.extend(jQuery.easing, {
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    Linear: function (x, t, b, c, d) {
        return c * t / d + b
    }
});

$(function () {
    function Cloud(eParent, iIndex) {
        this.iIndex = iIndex;
        this.eParent = eParent;
        this.sClassName = '';
        this.arrZIndex = [0, 1, 2, 3];
        this._init();
    }
    Cloud.prototype = {
        constructor: Cloud,
        _getClassName: function () {
            return 'cloud-' + Math.floor(Math.random() * 5);
        },
        _getLateTime: function () {
            return this.iIndex * 1E4;
        },
        _getTotalTime: function () {
            return Math.floor(Math.random() * 5E4);
        },
        _init: function () {
            var _this = this;
            this.eCloud = $("<div class='cloud'></div>");
            this.eParent.append(this.eCloud);
            this._resetAttr();
            window.setTimeout(function () {
                _this.move();
            }, _this._getLateTime());
        },
        _resetAttr: function () {
            var sClassName = this._getClassName()
            this.eCloud.removeClass(this.sClassName).addClass(sClassName);
            this.sClassName = sClassName;
            this.eCloud.css({
                'left': window.screen.width,
                'top': Math.floor(Math.random() * 640 - this.eCloud.height() / 2),
                'z-index': this.arrZIndex[Math.floor(Math.random() * 4)]
            })
        },
        move: function () {
            var _this = this;
            _this.eCloud.animate({ 'left': -this.eCloud.width() }, 5E4, 'Linear', function () {
                _this._resetAttr();
                _this.move();
            });
        }
    }; 
    
    (function () {
        var iTotal = 5, eTarget = $('#slide_content');
        while (iTotal--) {
            new Cloud(eTarget, iTotal);
        }
    })();

    function addStepsFn() {
        $.extend(this, {
            inScene: function () {
                this.nextIn();
            },
            outScene: function (callback) {
                callback && (this.outCallback = callback);
                this.nextOut();
            },
            nextIn: function () {
                this.inSteps[this.iStep]();
                this.iStep++;
            },
            nextOut: function () {
                this.iStep--;
                if (this.iStep < 0) {
                    this.iStep = 0
                }
                else {
                    this.outSteps[this.iStep]();
                }
            }
        });
    }
    
    function Animate(animateFn, endCallBack) {
        this.iTimer = 0;
        this.animateFn = animateFn;
        this.iTotal = 120;
        this.iT = 0;
        this.endCallBack = endCallBack;
    }
    Animate.prototype = {
        constructor: Animate,
        stop: function () {
            this.iT = 0;
            window.clearTimeout(this.iTimer);
        },
        act: function () {
            var _this = this;
            this.iTimer = window.setTimeout(function () {
                _this.iT++
                if (_this.iT < _this.iTotal) {
                    if (_this.animateFn(_this.iT)) {
                        _this.stop();
                        _this.endCallBack();
                    } else {
                        _this.act();
                    }
                } else {
                    _this.stop();
                    _this.endCallBack();
                }
            }, 13);
        }
    }

    var Scene0 = {
        init: function () {
            this.eStage = $('#stage_0');
            this.eComputer = $('#computer');
            this.eTitleList = $('#title-list-c li');
            this.eC = $('#slider_0')
            this.inSteps = [];
            this.outSteps = [];
            this.iStep = 0;
            this.outCallback = null;
            addStepsFn.call(this);
            this.iTimer = 0;

            this.setSteps();
        },
        stop: function () {
            this.eStage.stop();
            this.eComputer.stop();
            this.eTitleList.stop();
            window.clearTimeout(this.iTimer);
        },
        setSteps: function () {
            var _this = this;
            this.inSteps = [
                function () {
                    _this.eStage.show();
                    _this.eC.show();
                    _this.eStage.removeClass('slider-0-animate').css('opacity', 1).addClass('slider-0-animate').delay(1E3);
                    _this.iTimer = window.setTimeout(function () {
                        _this.nextIn();
                    }, 1.2E3);
                },
                function () {
                    _this.eComputer.stop().show().animate({
                        left: 280
                    }, 1E3, 'easeOutBack', function () { _this.nextIn(); });
                },
                function () {
                    var iLen = _this.eTitleList.length, iIndex = 0, eTemp = null;
                    for (; iIndex < iLen; iIndex++) {
                        eTemp = _this.eTitleList[iIndex];
                        $(eTemp).stop().delay(300 * iIndex).show().animate({
                            left: 0
                        }, .8E3, 'easeOutBounce');
                    }

                }
           ];
            this.outSteps = [
                function () {
                    _this.eStage.stop().css({ 'transform': '' }).animate({
                        'opacity': 0
                    }, .3E3, function () { _this.eC.hide(); _this.outCallback && _this.outCallback(); });
                },
                function () {
                    _this.eComputer.stop().show().animate({
                        left: 1000
                    }, 1E3, 'easeOutBack', function () { _this.nextOut(); });
                },
                function () {
                    var iLen = _this.eTitleList.length, iIndex = 0, eTemp = null, iCur = 0;
                    for (; iIndex < iLen; iIndex++) {
                        eTemp = _this.eTitleList[iIndex];
                        $(eTemp).stop().delay(100 * iIndex).animate({
                            left: -160
                        }, .5E3, 'easeOutBack', function () {
                            iCur++;
                            $(this).hide();
                            if (iCur == iLen) {
                                _this.nextOut();
                            }
                        });
                    }
                } ];
        }
    }
	
});

export default {
  
}
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
