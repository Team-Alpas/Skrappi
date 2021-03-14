<template>
    <div class="Donate">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="header">
            <div class="inner">
                <h1>Donate your waste</h1>
                <p>Donating recyclable items to others will not only help others <br>that need it, but also the environment. So donate now!</p>
            </div>
        </div>
        <div class="what-container">
            <dir><h1>What</h1><h1>to</h1><h1>donate?</h1></dir>
            <img id="speed" src="../assets/speedlungs2.png">
        </div>
        <div class="body">
            <h3>
                <a href="#/NearRequests">See Near Requests</a>
            </h3>
            <img id="logo" src="../assets/skrappi_logo.png">
            <h3>
                <a href="#/Donate">Donate Items</a>
            </h3>
        </div>
        <div class="highlights">
            <div id="container">
                <h1>REQUESTING: <br>Bottlecaps</h1>
                <img src="../assets/img1.png">
                <p>Requested 10 mins. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Plastic Bottles</h1>
                <img src="../assets/img2.png">
                <p>Requested 15 mins. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Old Clothes</h1>
                <img src="../assets/img3.png">
                <p>Requested 2 hrs. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Broken Radio</h1>
                <img src="../assets/img4.png">
                <p>Requested 69 days ago</p>
            </div><p></p><p></p><p></p><p></p>
            <div id="container">
                <h1>REQUESTING: <br>Bottlecaps</h1>
                <img src="../assets/img1.png">
                <p>Requested 10 mins. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Plastic Bottles</h1>
                <img src="../assets/img2.png">
                <p>Requested 15 mins. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Old Clothes</h1>
                <img src="../assets/img3.png">
                <p>Requested 2 hrs. ago</p>
            </div>
            <div id="container">
                <h1>REQUESTING: <br>Broken Radio</h1>
                <img src="../assets/img4.png">
                <p>Requested 69 days ago</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Donate',
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;        
        margin: 0% auto;    
        text-align: center;
        padding-top: 1px;
        min-height: 140px;
        z-index: 0;
        position: relative;
        height: 100%;
        background-image: url(../assets/headerbg.jpg);
        .inner {
            width: 75rem;
            max-width: calc(100% - 6rem);
            text-align:center;
            margin-top:5%;
            margin-left: auto;
            margin-right: auto;
        }
        h1{
            font-weight: 300;
            font-size: 75px;
            line-height: 1.2;
            text-transform: uppercase;
            margin: 0 0 1.5rem 0;
            color: #333C1A;
        }
        p{
            font-size: 1.5rem;
            margin: 0 0 2rem 0;
            padding-bottom: 30px;
            border: 0;
            font-style: inherit;
            vertical-align: baseline;
            color: #333C1A;
        }
    }
    .what-container {
        background-color: pink;
        display: grid;
        grid-template-columns: 25% auto;
        grid-template-rows: 10% 80% 10%;
        height: 300px;
        width: 80%;
        margin: 3% auto;
        border-radius: 16px;
        text-align: middle;
        padding: 30px;
        min-height: 140px;
        z-index: 3;
        position: relative;
        #speed{
            width:100%;
            padding:0px;
            height: 100%;
            grid-row: span 3;
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 4;
            
        }
        h1{
            font-family: 'Ranchers';
            font-weight: 300;
            font-size: 4.5vw;
            line-height: 1.2;
            width:100%;
            text-align:center;
            text-transform: uppercase;
            padding: 10px;
            margin: auto;
            color: #333C1A;
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 3;
            grid-row-end: 4;
        }
    }
    .body{
        display: grid;
        grid-template-columns: repeat(3, 1fr);    
        h3{
            position:relative;
            text-align: center;
            width:50%;
            height:30px;
            font-family: Arial;
            font-style: normal;
            font-weight: 500;
            font-size: calc(10px + 1vw);
            color: #4dd964;
            top:calc(20px + 5vw);
            left:22%;
            border-radius: 30px;
            padding:calc(1px + 1vw);
            border-color:#4dd964;
            border-style: solid;
            border-width: thin;
            a:link, a:visited {
                color: #4dd964;
            }      
            &:hover{
                transition: 0.3s ease-in-out;
                background: #4dd964;
                color:white;
                a{
                    transition: 0.3s ease-in-out;
                    color:white;
                }
            }   
        }
        p{
            font-size: 1.5rem;
            margin: 0 0 2rem 0;
            padding: 0;
            border: 0;
            font-style: inherit;
            vertical-align: baseline;
            color: #333C1A;
        }
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
    }
    
    .highlights{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        margin: 2.5rem 0;
        padding: 20px;
        text-align: center;
        #container{
            background-color: #AFCA90;
            border-radius: 2rem;
            width: 16rem;
            p{
                color:white;
            }
            h1{
                font-size: 1.5rem;
                margin: 0 0 2rem 0;
                padding-bottom: 5px;
                border: 0;
                font-style: inherit;
                vertical-align: baseline;
                color: white;
            }
        }
        img{
            
            margin:1rem;
            border-radius: 1rem;
            height: 10rem;
            width: 10rem;
            object-fit: cover;
        }
        h2{
            padding: 10px;
        }
    }
    @media only screen and (max-width:620px) {
    /* For mobile phones: */
        #speed, .what-container, .body h1{
            width:100%;
        }
    }
</style>

