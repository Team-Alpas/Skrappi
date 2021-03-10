<template>
    <div id = "Body">
        <div id = "navBox">
            <div id = "title">
                <router-link id="header" to="/Home">Skrappi</router-link>
            </div>
            <div id = "links">
            <router-link v-if="mobileView >=750" id="link" to="/Request">Request</router-link>
            <router-link v-if="mobileView >=750" id="link" to="/Donate">Donate</router-link>
            <router-link v-if="mobileView >=750" id="link" to="/Exchange">Exchange</router-link>
            <router-link v-if="mobileView >=750" id="link" to="/BuynSell">Buy and Sell</router-link>
            <router-link v-if="mobileView >=750" id="link" to="/Auction">Auction</router-link>
            <router-link v-if="mobileView >=750" id="link" to="/signup">Sign Up</router-link>
            </div>
            <div id = "barBox">
            <i v-if="mobileView < 750" button @click="sideShow = !sideShow" class="fa fa-bars"></i>
            </div>
        </div>
            <transition name="slide-fade">
                <div id = "sideBar" v-if="sideShow">
                <router-link  id="link" to="/Home">Home</router-link>
                <router-link  id="link" to="/Schedule">Schedule</router-link>
                <router-link  id="link" to="/Standings">Standings</router-link>
                <router-link  id="link" to="/About">About</router-link>
                <router-link  id="link" to="/Auction">Auction</router-link>
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
#navBox{
    top: 0%;
    overflow:hidden;
    background-color: aqua;
    display:flex;
    #title{
        padding:1vmax;
        #header{
            //padding: 0.75% 0 0.5% 1vw;
            font-size: 20px;
            background-color: darkgreen;
        }
    }
    #links{
        margin-left: 1vw;
        background-color: darkgrey;
        margin-top: 20px;
        #link{
            text-align: center;
            padding: 50% 2vw;
            background-color: crimson;
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