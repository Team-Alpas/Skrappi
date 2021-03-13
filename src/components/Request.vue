<template>
    <div id="topBox">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>{{formatText}}</h2> 
    </div>
</template>

<script>
export default {
    name:'Request',
    data(){
        return{
            formatText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        }
    }
}
</script>

<style lang="scss" scoped>
#topBox{
    width:100%;
    height:300px;
    position: relative;
    h1{
        position:absolute;
        text-align:left;
        width: 30%;
        height: 100px;
        font-family: Arial;
        font-style: normal;
        font-weight: 500;
        font-size: calc(10px + 1vw);
        line-height: calc(15px + 1vw);
        color: #95d458;
        top:50px;
        left:20%;
        margin:auto;
    }
    h2{
        position:absolute;
        text-align:left;
        width: 30%;
        height: 75px;
        font-family: Arial;
        font-style: normal;
        font-weight: 500;
        font-size: calc(1px + 1vw);
        line-height: calc(1px + 1vw);
        color: #95d458;
        top:calc(110px + 1vw);
        left:20%;
        margin:auto;
    }
}
</style>

