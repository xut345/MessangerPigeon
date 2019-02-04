<template>
<div >
    <b-container fluid class="bg-light">
        <b-row class="mess-fun">
            <b-col > <ui-switch class="switch" v-model="switch1" switch-position="right">{{switch1?"Private":"Public"}}    </ui-switch> </b-col>
        </b-row>
        
    </b-container>
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
            switchContext:"Private"
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
    background: #ddd;
}

.mess-fun{
    text-align: center;
    margin-bottom: 10px;
}

.mess-btn{
    cursor: pointer;
    float: right;

}

.switch{
    float: right;
}
</style>
