<template>
    <div id="body">
        <div id="topBox">
                <i class="far fa-check-circle"></i>
                <h1>Submission Successful!</h1>
                <router-link  id="link" to="/RequestForm"><h3>Post Another Request?</h3></router-link>
        </div>
        <img id="wave" alt="wave" src="../assets/wave.png">
    </div>
</template>

<script>
export default {
    name:'RequestRequested',
    data(){
        return{
            formatText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }
    },
}
</script>

<style lang="scss" scoped>
#body{
    #topBox{
        //width:100%;
        //height:300px;                :center="{lat:coordinates.lat, lng:coordinates.lng}"
        position:relative;
        width:100%;
        height:470px;
        margin-top:40px;
        background-color: #4dd964;
        h1{
            position:absolute;
            color:white;
            right:40.75%;
            top:292px;
        }
        h3{
            position:absolute;
            text-align: center;
            width:20%;
            height:20px;
            font-family: Arial;
            font-style: normal;
            font-weight: 500;
            font-size: calc(5px + 1vw);
            color: white;
            top:370px;
            border-radius: 20px;
            right:38.5%;
            padding:calc(1px + 1vw);
            border-color:white;
            border-style: solid;
            border-width: thin;       
            &:hover {
                transition: 0.3s ease-in-out;
                background: white;
                //background: #4dd964;
                color:#4dd964;
            }   
        }
        i{
            position:absolute;
            width:25%;
            height:300px;
            font-size:calc(80px + 10vw);
            top:40px;
            color:white;    
            right:31.5%;
        }
    }
    img{
        width:100%;
        filter: invert(81%) sepia(15%) saturate(1953%) hue-rotate(70deg) brightness(93%) contrast(82%);
    }
}
</style>

