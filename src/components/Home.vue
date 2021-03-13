<template>
    <div id="homeBox">
        <img id="logo" alt="skrappi logo" src="../assets/skrappi.png">
        
        <!--<div class="containertop">
            <svg viewBox="0 0 500 130" preserveAspectRatio="xMinYMin meet" >
                <path d="M0,0 C180,50 400,-60 500,60 L500,0 L0,0 Z" transform="scale(1,-1) translate(0,-100)"  style="stroke: none; fill:#a2d74a;"></path>
            </svg>
        </div>
        
        <div class="container">
            <svg viewBox="0 0 500 130" preserveAspectRatio="xMinYMin meet">
                <path d="M0,30 C180,0 400,130 500,50 L500,00 L0,0 Z" style="stroke: none; fill:#a2d74a; "></path>
            </svg>
        </div>-->
        <div id="container">
            <img id="wavehello" src="../assets/wavehello.png">
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
            <img id="donateimg" src="../assets/donate.png">
        </div>
        <!--<img id="wave" alt="wave1" src="../assets/wavehello.png">-->
        <div id="infoBox2">
        </div>
        <div id="infoBox3">
        </div>
        <div id="infoBox4">
        </div>
        <div id="infoBox5">
        </div>
        <div id="footer">
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            hMessage:"DONATE",
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
        min-width:200px;
        max-width:16%;
        filter: drop-shadow(10px 10px 4px #e3e3e3);
        //background-color: brown;
    }
    #headBox{
        margin-top:2%;
        text-align: center;
        color:black;
    }
    #container {
        position: relative; 
        .search-box {
            position:absolute;
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
            min-width: 300px;
            max-width:30%;
            margin-left: auto;
            margin-right: auto; //hi
            left: 0;
            right: 0;
            text-align: center;
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
    }
    #infoBox1{
        position:absolute;
        top: 84px;
        left: 110px;
        float:left;
        height:450px;
        text-align: center;
        margin-top: 0%;
        h1{
            width: 321.92px;
            height: 104.73px;
            font-family: Arial;
            font-style: normal;
            font-weight: 800;
            font-size: 72px;
            line-height: 108px;
            color: #FFFFFF;
        }
        h2{
            color:white;
        }
    }
    #wavehello{
        position:absolute;
        width: 100%;
        min-width:50%;
        height: 821px;
        left: 0px;
        top: -100px;
    }

    #donateimg{
        position:absolute;
        float:right;
        top: 0px;
        left: 953.1px;
        transform: rotate(16.17deg);
    }
    /*Wave on the infoBox1, super dirty code
    svg {
        position: absolute;
        left: 0;
    }
     
    .containertop {
        position: relative;
        width: 100%;
        padding-bottom: 20%;
        vertical-align: bottom;
        overflow: hidden;
    }
    .container {
        position: relative;
        width: 100%;
        padding-bottom: 20%;
        vertical-align: middle;
        overflow: hidden;
    }*/
    

    /*#infoBox2{
        background-color: white;
        height:450px;
    }
    #infoBox3{
        background-color: #f8f8f8;
        height:450px;
    }
    #infoBox4{
        background-color: white;
        height:450px;
    }
    #infoBox5{
        background-color: #f8f8f8;
        height:450px;
    }
    #footer{
        background-color: #a2d74a;
        height:350px;
    }*/
}
</style>


