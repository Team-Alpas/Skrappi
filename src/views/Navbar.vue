<template>
    <div id = "Body">
        <div id = "navBox">
            <div id = "title">
                <router-link id="header" to="/Home"><img alt="Valo logo" src="../assets/skrappi_logo.png"></router-link>
            </div>
            <div id = "links">
                <div id = "linkBox">
                    <router-link v-if="mobileView >=750" id="link" to="/Request">REQUEST</router-link>
                    <router-link v-if="mobileView >=750" id="link" to="/Donate">DONATE</router-link>
                    <router-link v-if="mobileView >=750" id="link" to="/Exchange">EXCHANGE</router-link>
                    <router-link v-if="mobileView >=750" id="link" to="/BuynSell">SHOP</router-link>
                </div>
            </div>
            <div id = "topSign">
                <div id = "profileBox">
                    <p id="plink">LOGIN</p>
                    <router-link v-if="mobileView >=750" id="plink" to="/signup">SIGN UP</router-link>
                    <p id="plink">ABOUT TEAM ALPAS</p>
                </div>
                <div id = "searchBox">
                </div>
            </div>
            <div id = "barBox">
            <i v-if="mobileView < 750" button @click="sideShow = !sideShow" class="fa fa-bars"></i>
            </div>
        </div>
            <transition name="slide-fade">
                <div id = "sideBar" v-if="sideShow">
                <router-link  id="link" to="/Request">REQUEST</router-link>
                <router-link  id="link" to="/Donate">DONATE</router-link>
                <router-link  id="link" to="/Exchange">EXCHANGE</router-link>
                <router-link  id="link" to="/BuynSell">SHOP</router-link>
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
    background-color: aqua;
    display:flex;
    #title{
        padding-left:2vw;
        padding-right:2vw;
        margin-top:1vw;
        img{
            width:3vw;
        }
    }
    #topSign{
        background-color: red;
        //padding:5%;
        width:50%;
        display:grid;
        #profileBox{
            background-color:blueviolet;
            display:flex;
            #plink{
                padding-left:2%;

            }
        }
        #searchBox{
            background-color: burlywood;
        }
    }
    #links{
        //margin-left: 1vw;
        background-color: darkgrey;
        width:50%;
        //margin-top: 20px;
        padding-top:2%;
        #linkBox{
            #link{
                text-align: center;
                padding: 50% 2vw;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
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