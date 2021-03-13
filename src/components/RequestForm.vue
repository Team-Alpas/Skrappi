<template>
    <div id="body">
        <div id="topBox">
            <div id="mapBox">
            <GmapMap
                :center="{lat:coordinates.lat, lng:coordinates.lng}"
                :zoom="15"
                map-type-id="terrain"
                style="width: 500px; height: 400px"
            >
            </GmapMap>
            </div>
            <div id="formBox">
                <input type='text' id='inForm' name='itemName' placeholder='Item Name'><br>
                <input type='text' id='inForm' name='itemDesc' placeholder='Item Description'><br>
                <input type='text' id='inForm' name='Quantity' placeholder='Quantity'><br>
                <input type='text' id='inForm' name='location' placeholder='Your Location'><br>
                <h3>Post Request</h3>
            </div>
        </div>
        <img id="wave" alt="wave" src="../assets/wave.png">
    </div>
</template>

<script>
export default {
    name:'RequestForm',
    data(){
        return{
            formatText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            coordinates:{
                lat:0,
                lng:0,
            }
        }
    },
    created() {
        this.$getLocation({})
            .then(coordinates => {
                this.coordinates = coordinates;
            });
    }
}
</script>

<style lang="scss" scoped>
#body{
    #topBox{
        //width:100%;
        //height:300px;
        width:100%;
        height:400px;
        display:flex;
        margin-top:40px;

        padding-top:20px;
        background-color: #4dd964;
        #mapBox{
            margin:auto;
        }
        #formBox{
            margin-right:35%;
            #inForm{
                width:300%;
                height:30px;
                border-radius: 5px;
                border-color: transparent;
                padding:5%;
                min-width: 100px;
                max-width: 100vw;
                margin: 5%;
            }
            h3{
                text-align: center;
                width:100%;
                height:20px;
                font-family: Arial;
                font-style: normal;
                font-weight: 500;
                font-size: calc(5px + 1vw);
                color: white;
                margin-top: 5px;
                border-radius: 20px;
                margin-left:190%;
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
        }
    }
    img{
        width:100%;
        filter: invert(81%) sepia(15%) saturate(1953%) hue-rotate(70deg) brightness(93%) contrast(82%);
    }
}
</style>

