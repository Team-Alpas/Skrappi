<template>
    <div id="body">
        <div id="topBox">
            <div id="mapBox">
            <GmapMap
                :center="{lat:defCoord.lat, lng:defCoord.lng}"
                :zoom="18"
                map-type-id="terrain"
                style="width: 500px; height: 400px"
            >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
            </GmapMap>
            </div>
            <div id="formBox">    
                <div id="descBox">
                    <h1>Plastic Bottles</h1>
                    <h2>Item Description</h2>
                    <p>Need it for a school project</p>
                    <h2>Quantity</h2>
                    <p>50 Pieces</p>
                    <h2>Location</h2>
                    <p>Suntrust Parkview</p>
                </div>     
                <router-link  id="link" to="/Message"><h3>Message</h3></router-link>
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
            },
            mapwaCoord:{
                lat:14.590634,
                lng:120.978764
            },
            defCoord:{
                lat:14.590736,
                lng:120.983254,
            },
            markers: []
        }
    },
    methods: {
        drawMarker() {
            this.markers = [
                {
                    position: this.defCoord,
                },
            ]
        },
        onEnter(){
            this.defCoord = this.mapwaCoord;
            this.drawMarker();
        }
    },
    created() {
        this.$getLocation({})
            .then(coordinates => {
                this.coordinates = coordinates;
                this.drawMarker();
            })
    },
}
</script>

<style lang="scss" scoped>
#body{
    #topBox{
        //width:100%;
        //height:300px;                :center="{lat:coordinates.lat, lng:coordinates.lng}"
        width:100%;
        height:600px;
        display:flex;
        margin-top:40px;
        background-color: #4dd964;
        #mapBox{
            margin:auto;
            margin-top:40px;
        }
        #formBox{
            margin-top:40px;
            margin-right:20%;
            #descBox{
                width:400px;
                padding:2%;
                background-color: white;
                border-radius: 10px;
                h2{
                    color:#4dd964;
                }
                p{
                    color:gray;
                }

            }
            h3{
                text-align: center;
                width:50%;
                height:20px;
                font-family: Arial;
                font-style: normal;
                font-weight: 500;
                font-size: calc(5px + 1vw);
                color: white;
                margin-top: 5px;
                border-radius: 20px;
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

