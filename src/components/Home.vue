<template>
    <div id="homeBox">
        <img alt="Valo logo" src="../assets/logo.png">
        <div id="dateBox">
            <h1>{{dRange}}</h1>
        </div>
        <div id="regBox">
            <a href="https://forms.gle/aQBrTTwFWAogu9SGA">Register</a>
        </div>
        <div id="deadlineBox">
            <p>Early Registration Deadline {{eDead}}</p>
            <p>Final Registration Deadline {{lDead}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            dRange:"NOV 23 - NOV 27",
            eDead:"November 15, 2020, 11:59PM",
            lDead:"November 22, 2020, 11:59PM"
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
    #dateBox{
        text-align: center;
    }
    #deadlineBox{
        text-align: center;
        p{
            font-size: 1vw;
            margin-top: 2px;
            margin-bottom: 0px;
        }
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


