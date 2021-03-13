<template>
    <div id="topBox">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>{{formatText}}</h2> 
        <h3>Request</h3>
    </div>
</template>

<script>
export default {
    name:'RequestForm',
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
    z-index: 1;
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
        color: #4dd964;
        top:70px;
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
        color: gray;
        top:calc(130px + 1vw);
        left:20%;
        margin:auto;
    }
    h3{
        position:absolute;
        text-align: center;
        width:25%;
        height:30px;
        font-family: Arial;
        font-style: normal;
        font-weight: 500;
        font-size: calc(10px + 1vw);
        color: #4dd964;
        top:calc(140px + 5vw);
        left:20%;
        border-radius: 30px;
        padding:calc(1px + 1vw);
        border-color:#4dd964;
        border-style: solid;
        border-width: thin;       
        &:hover {
            transition: 0.3s ease-in-out;
            background: #4dd964;
            color:white;
        }     
    }
}
</style>

