<template>
<div >
    <div class="mess-fun">
        <ui-switch class="switch" v-model="switch1" >{{switch1?"Private":"Public"}}    </ui-switch> 
    </div>
    <div class="mess-list">
        <div class="mess" v-for="mess in messages" v-bind:key="mess.id">{{mess.topic}}, {{mess.sent_by}}</div>
    </div>
</div>
</template>

<script>

import list from '../mock/messages.js'

console.log(list)

export default {
    data(){
        return{
            messages:list,
            switch1:false,
        }
    }
}
</script>

<style scoped>
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
    float: right;
}
</style>
