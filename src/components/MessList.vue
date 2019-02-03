<template>
<div >
    <b-container fluid class="bg-light">
        <b-row class="mess-fun">
            <b-col > <div class="mess-btn">Private/Public</div> </b-col>
        </b-row>
        
    </b-container>
    <div class="mess-list">
        <div class="mess">1</div>
        <div class="mess">2</div>
        <div class="mess">3</div>
        <div class="mess">1</div>
        <div class="mess">2</div>
        <div class="mess">3</div>
                <div class="mess">1</div>
        <div class="mess">2</div>
        <div class="mess">3</div>
                <div class="mess">1</div>
        <div class="mess">2</div>
        <div class="mess">3</div>
                <div class="mess">1</div>
        <div class="mess">2</div>
        <div class="mess">3</div>        
    </div>

  
</div>
</template>

<script>
export default {
 
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
}

.mess{
    padding-left: 20px;
    height: 50px;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding-top: 15px;
}

.mess-fun{
    text-align: center;
    margin-bottom: 10px;
}

.mess-btn{
    cursor: pointer;
    float: right;

}
</style>
