<template>
    <div id="schedBox">
        <div id="navBox">
            <p>Group A</p>
            <p>Group B</p>
            <p>Finals</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Schedule",
}
</script>

<style lang="scss"scoped>
#schedBox{
    #navBox{
        display:flex;
        background-color: chartreuse;
        p{
            padding:0% 2%;
        }
    }
}
</style>

