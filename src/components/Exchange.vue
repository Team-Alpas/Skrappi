<template>
    <div id="standBox">
        <div id="navBox">
            <p>Group A</p>
            <p>Group B</p>
            <p>Finals</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Exchange",
}
</script>

<style lang="scss" scoped>
#standBox{
    float:left;
    background-color: chocolate;
    width:100%;
    #navBox{
        background-color: chartreuse;
        display: flex;
        p{
            padding:0% 2%;
        }
    }
}
</style>

