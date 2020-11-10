<template>
    <div id = "Body">
        <div id = "navBox">
            <div id = "links">
            <router-link id="link" to="/Contact">Contact</router-link>
            <router-link id="link" to="/About">About</router-link>
            <router-link id="link" to="/Standings">Standings</router-link>
            <router-link id="link" to="/Schedule">Schedule</router-link>
            <router-link id="link" to="/Home">Home</router-link>
            </div>
        </div>
        <div id = "content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'Navbar',
}
</script>

<style lang="scss" scoped>
#navBox{
    top: 0%;
    overflow:hidden;
    background-color: aqua;
    #links{

        #link{
            float:right;
            margin-right:0%;
            text-align: center;
            padding:1.5vw;
            background-color: crimson;
        }
    }
}
</style>