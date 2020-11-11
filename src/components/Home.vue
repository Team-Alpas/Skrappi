<template>
    <div id="homeBox">
        <img alt="Valo logo" src="../assets/logo.png">
        <div id="dateBox">
            <h1>{{dateRange}}</h1>
        </div>
        <div id="regBox">
            <a href="https://forms.gle/aQBrTTwFWAogu9SGA">Register</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
    date(){
        return{
            dateRange:"NOV 23 - NOV 27",
        }
    },
}
</script>

<style lang="scss" scoped>
#homeBox{
    img{
        display:block;
        padding: 3%;
        margin: auto;
        width:500px;
        background-color: brown;
    }
    #regBox{
        background-color: aqua;
        margin: auto;
        width:100%;
        max-width: 300px;
        padding: 30px 5%;
        border-radius: 10px;
        a{
            margin-left: 40%;
        }
    }
}
</style>


