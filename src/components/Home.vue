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
                <input v-on:keyup.enter="redirectPage" class="search-txt" type="text" name="" placeholder="Have something to Donate?">
                <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-lg"></i></a>
            </div>
            <div id="infoBox1">
                <h1>{{hMessage}}</h1>
                <h2>Donate unused items to people, organizations,  and families to lend a helping hand to. </h2>
                <h2>One man’s trash is another man’s treasure!</h2>
            </div>
            <img id="donateimg" src="../assets/donate.png">
            <img id="wavehello2" src="../assets/wavehello.png">
            <div id="infoBox2">
                <h1>EXCHANGE</h1>
                <h2>Swap items with people near you with the</h2>
                <h2>same hobbies and interests.</h2>
            </div>
            <img id="request" src="../assets/exchange.png">
            <div id="infoBox3">
                <h1>REQUEST</h1>
                <h2>Ask for anything you need and we’ll make sure that donators will see them!</h2>
                <h2>donators will see them!</h2>
                
            </div>
            <img id="exchange" src="../assets/ha.png">
            
            <div id="footer">
                <div id='icons'>
                    <i id="disIcon" class="fab fa-discord"></i>
                    <i id="Icon" class="fab fa-mail"></i>
                    <i id="Icon" class="fab fa-facebook"></i>
                    <i id="Icon" class="fab fa-twitter"></i>
                    <i id="Icon" class="fab fa-instagram"></i>
                    <i id="Icon" class="fab fa-linkedin"></i>
                </div>         
            </div>
        </div>
        <!--<img id="wave" alt="wave1" src="../assets/wavehello.png">-->

        
        <div id="infoBox4">

        </div>
        <div id="infoBox5">
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            hMessage:"DONATE",
            hDesc1:"Donate unused items to people, organizations,  and families to lend a helping hand to. One man’s trash is another man’s treasure!",
            hDesc2:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            eDead:"November 15, 2020, 11:59PM",
            lDead:"November 22, 2020, 11:59PM",
        }
    },
    methods:{
        redirectPage(){
            window.location.href = 'http://localhost:8080/#/Donate'
        }
    }
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
        #infoBox1{
            position:absolute;
            top: 84px;
            left: 110px;
            float:left;
            height:450px;
            text-align: left;
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
        #wavehello2{
            position:absolute;
            width: 100%;
            min-width:50%;
            height: 821px;
            left: 0px;
            top: 1000px;
        }

        #infoBox2{
            position:absolute;
            top: 200px;
            left: 50%;
            height:450px;
            text-align: left;
            margin-top: 500px;     
            h1{
                width: 321.92px;
                height: 104.73px;
                font-family: Arial;
                font-style: normal;
                font-weight: 800;
                font-size: 72px;
                line-height: 108px;
                color:#4dd964;
            }
            h2{
                color:#4dd964;
            }
        }
        #infoBox3{
            position:absolute;
            top: 750px;
            left: 5%;
            height:450px;
            text-align: left;
            margin-top: 500px;     
            h1{
                width: 321.92px;
                height: 104.73px;
                font-family: Arial;
                font-style: normal;
                font-weight: 800;
                font-size: 72px;
                line-height: 108px;
                color:white;
            }
            h2{
                color:white;
            }
        }
        #footer{
            position: absolute;
            top: 1900px;
            height:350px;
            width:100%;
            text-align:center;
            background-color: #4dd964;
            #icons{
            margin-top:75px;
            text-align: center; 
            i{
            color: white;
            }
            #disIcon{
            padding:5px;
            font-size:100px;
            }
            #Icon{
            // /padding: 0 2.5rem;
            padding:20px;
            font-size:100px;
            }
            }
        }

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
            /*
            &:hover {
                transition: 0.3s ease-in-out;
                background: #bfe192;
        }*/
        }
        .search-btn {
            color: #95d458;
            margin: 0px 10px;
            //&:hover { color: white; }
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
            //&:hover { color: white; }
        }

    }

    #donateimg{
        position:absolute;
        float:right;
        top: 0px;
        left: 953.1px;
        transform: rotate(16.17deg);
    }
    #request{
        position:absolute;
        float:left;
        top: 600px;
        width:700px;
        right: 1100px;
    }
    #exchange{
        position:absolute;
        float:right;
        top: 1100px;
        left: 725px;
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
    /*
    #infoBox3{
        position:absolute;
        top: 84px;
        left: 110px;
        float:left;
        height:450px;
        text-align: center;
        margin-top: 0%;
    }
    #infoBox4{
        position:absolute;
        top: 84px;
        left: 110px;
        float:left;
        height:450px;
        text-align: center;
        margin-top: 0%;
    }
    #infoBox5{
        position:absolute;
        top: 84px;
        left: 110px;
        float:left;
        height:450px;
        text-align: center;
        margin-top: 0%;
    }
    #footer{
        background-color: #a2d74a;
        height:350px;
    }
    */
   
}
</style>


