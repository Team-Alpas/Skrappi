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
        background-color: #a8d44c;
        #mapBox{
            margin: auto;
        }
        #formBox{
            width:25%;
            height:300px;
            top:70px;
            right:20%;
            #inForm{
                padding:5%;
                min-width: 100px;
                max-width: 100vw;
            }
        }
    }
    img{
        width:100%;
    }
}
</style>

