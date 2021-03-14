<template>
    <div id="topBox">
        <h1>Request for an item(s)</h1>
        <h2>{{formatText}}</h2> 
        <router-link id="link" to="/RequestForm"><h3>Request</h3></router-link>
        <i class="fas fa-hands-helping"></i>
    </div>
</template>

<script>
export default {
    name:'Request',
    data(){
        return{
            //formatText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            formatText:"Ask for anything you need and we'll make sure that donators will see them!",

        }
    }
}
</script>

<style lang="scss" scoped>
#topBox{
    width:100%;
    height:400px;
    position: relative;
    top:30px;
    h1{
        position:absolute;
        text-align:left;
        width: 30%;
        height: 100px;
        font-family: Arial;
        font-style: normal;
        font-weight: 500;
        font-size: calc(20px + 1vw);
        line-height: calc(15px + 1vw);
        color: #4dd964;
        top:70px;
        left:22%;
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
        font-size: calc(5px + 1vw);
        line-height: calc(1px + 1vw);
        color: gray;
        top:calc(120px + 1vw);
        left:22%;
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
        left:22%;
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
    i{
        position:absolute;
        width:25%;
        height:300px;
        font-size:calc(80px + 10vw);
        top:70px;
        right:20%;
        color:#4dd964;
        
    }
}
</style>

