<template>
    <div id="body">
        <div id="topBox">
            <div id="formBox">    
                <div id="descBox">
                </div>     
                <div v-if="seen" id="messBox">
                    <p>Hi I would like to donate!</p>
                </div>
                <div id="sendBox">
                    <input id="sssBox" placeholder="Type Message">
                    <i v-on:click="seen =!seen" class="fas fa-paper-plane"></i>
                </div>
                <div id="inBox">
                    <div id="insideBox">
                        <img src='../assets/iyah_reyes.jpg'>
                        <div id="iinBox">
                        <h1>Iyah Dela Cruz</h1>
                        <h2>Active 1h ago</h2>
                        </div>
                    </div>
                </div>
                <router-link  id="link" to="/RequestAccepted"><h3>Message</h3></router-link>
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
            markers: [],
            seen:false
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
        #formBox{
            position:relative;
            top:40px;
            left:40%;
            #descBox{
                position:absolute;
                width:600px;
                height:400px;
                padding:2%;
                background-color: white;
                border-radius: 10px;
            }
            #messBox{
                position:absolute;
                width:200px;
                height:50px;
                border-radius: 10px;
                top:20px;
                left:380px;
                background-color: #4dd964;
                text-align: center;
                p{
                    color:white;
                }
                //background-color: red;
            }
            #sendBox{
                position:absolute;
                width:600px;
                height:75px;
                padding:2%;
                background-color: white;
                border-radius: 10px;
                border-width: 10px;
                border-color:#4dd964;
                top:420px;
                display:flex;
                input{
                    width:90%;
                }
                i{
                    color:#4dd964;
                    font-size:40px;
                    padding:5px;
                    &:hover{
                        color:#70D1AC;
                    }
                }
            }
            #inBox{
                position:absolute;
                width:200px;
                height:500px;
                border-radius: 10px;

                right:150px;
                background-color: white;
                #insideBox{
                    position:relative;
                    display:flex;
                    top:10px;
                    left:10px;
                        img{
                            width:50px;
                            height:50px;
                        }
                        #iinBox{
                        display:grid;
                        position:relative;
                        width:100%;
                        h1{
                            position:absolute;
                            width:100%;
                            font-size: 15px;
                            left:10px;
                            color:#4dd964;
                        }
                        h2{
                            position:absolute;
                            font-size: 10px;
                            width:100%;
                            left:10px;
                            top:20px;
                            color:gray;
                        }
                    }
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

