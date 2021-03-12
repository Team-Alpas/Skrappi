<template>
    <div id="homeBox">
        <img id="logo" alt="skrappi logo" src="../assets/skrappi.png">
        <div class="search-box">
            <a class="search-btn" href="#"><i class="fas fa-search fa-lg"></i></a>
            <input class="search-txt" type="text" name="" placeholder="Looking for a place to Donate?">
            <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-lg"></i></a>
        </div>
        <div id="infoBox1">
            <h1>{{hMessage}}</h1>
            <h2>{{hDesc1}}</h2>
            <h2>{{hDesc2}}</h2>
        </div>
        <img id="wave" alt="wave1" src="../assets/wave.png">
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            hMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hDesc1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            hDesc2:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            eDead:"November 15, 2020, 11:59PM",
            lDead:"November 22, 2020, 11:59PM"
        }
    },
}
</script>

<style lang="scss" scoped>
#homeBox{
    #logo{
        display:block;
        //padding: 3%;
        margin: auto;
        padding-top:3%;
        padding-bottom: 3%;
        width:16%;
        filter: drop-shadow(10px 10px 4px #e3e3e3);
        //background-color: brown;
    }
    #headBox{
        margin-top:2%;
        text-align: center;
        color:black;
    }
    .search-box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background: white;
        height: 24px;
        padding: 10px;
        border-radius: 10px;
        border-color:gray;
        border-style: solid;
        border-width: thin;
        width:30%;
        margin:auto;
        &:hover {
            transition: 0.3s ease-in-out;
            background: #bfe192;
    }
    }
    .search-btn {
        color: #95d458;
        margin: 0px 10px;
        &:hover { color: white; }
    }
    .search-txt {
        border: none;
        background: none;
        outline: none;
        padding: 0;
        color: #404040;
        font-size: 100%;
        transition: 0.4s;
        line-height: 20px;
        width: 100%;
    }
    .caret-down-btn {
        color: #95d458;
        float: right;
        margin-right: 10px;
        &:hover { color: white; }
    }
    #infoBox1{
        background-color: #a2d74a;
        width:100%;
        height:18vw;
        margin-top:5%;
        text-align: center;
        h1{
            color:white;
            padding-top:5%;
        }
        h2{
            color:white;
            
        }
    }
    #wave{
        width:100%;
    }
}
</style>


