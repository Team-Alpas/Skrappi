<template>
    <div id = "Body">
        <div id = "navBox">
            <div id = "title">
                <router-link id="header" to="/Home"><img alt="skrappi_text" src="../assets/skrappi_text.png"></router-link>
            </div>
            <div id = "links">
                <div id = "linkBox">
                    <router-link v-if="mobileView >=600" id="link" to="/Donate">Donate</router-link>
                    <router-link v-if="mobileView >=600" id="link" to="/Request">Request</router-link>
                    <router-link v-if="mobileView >=600" id="link" to="/FAQ">FAQ</router-link>
                    <router-link v-if="mobileView >=600" id="link" to="/About">About</router-link>
                    <router-link v-if="mobileView >=600" id="link" to="/Login">Login</router-link>
                    <router-link v-if="mobileView >=600" id="link" to="/signup">Sign Up</router-link>
                </div>
            </div>
            <div id = "barBox">
            <i v-if="mobileView < 600" button @click="sideShow = !sideShow" class="fa fa-bars"></i>
            </div>
        </div>
            <transition name="slide-fade">
                <div id = "sideBar" v-if="sideShow">
                <router-link  id="link" to="/Donate">Donate</router-link>
                <router-link  id="link" to="/Request">Request</router-link>
                <router-link  id="link" to="/FAQ">FAQ</router-link>
                <router-link  id="link" to="/About">About</router-link>
                <router-link  id="link" to="/Login">Login</router-link>
                <router-link  id="link" to="/Sign Up">Sign Up</router-link>
                </div>
            </transition>
        <div id = "content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            mobileView:window.innerWidth,
            sideShow:false,
        }
    },
    created() {
        window.addEventListener("resize", this.changeSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.changeSize);
    },
    methods:{
        changeSize(){
            this.mobileView=window.innerWidth;
        }
    }
}

</script>

<style lang="scss" scoped>
a { text-decoration: none; }
#navBox{
    top: 0%;
    overflow:hidden;
    //background-color: aqua;
    display:flex;
    #title{
        /*
        padding-left:2vw;
        padding-right:2vw;
        */
        margin:2vw 4vw;
        img{
            width:12vw;
        }
    }
    #links{
        //margin-left: 1vw;
        //background-color: darkgrey;
        width:100%;
        margin: 1vw auto;
        padding-top:2%;
        padding-left:40%;
        #linkBox{
            #link{
                text-align: center;
                padding: 50% 1vw;
                font-size: 150%;
                color:#5d5d5d;
                &:hover{
                    color: #7ae06e;
                }
            }
        }
    }
    #barBox{
        margin-left:auto;
        i{
            background-color: darkblue;
            padding: 20px;
        }
    }
}
.slide-fade-enter-active {
transition: all .3s ease;
}
.slide-fade-leave-active {
transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
transform: translateX(10px);
opacity: 0;
}
#sideBar{
    float:right;
    display:grid;
    background-color: darkmagenta;
    width:100%;
    #link{
        padding:3%;
    }
}
</style>