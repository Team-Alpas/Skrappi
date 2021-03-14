<template>
    <div id="body">
        <div id='title'>
            <h1>Skrappi FAQs</h1>
        </div>
        <div id="questions">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
            <h3>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Pellentesque sit amet porttitor eget dolor morbi non. </h3>
            <h1>Et malesuada fames ac turpis egestas sed tempus?</h1>
            <h3>Praesent tristique magna sit amet purus gravida quis blandit turpis. Felis eget nunc lobortis mattis aliquam. Aliquet risus feugiat in ante. Faucibus purus in massa tempor nec.</h3>
            <h1>Viverra vitae congue eu consequat ac felis donec et. Id donec ultrices tincidunt arcu non sodales neque.?</h1>
            <h3>Vestibulum morbi blandit cursus risus at ultrices. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Viverra aliquet eget sit amet.</h3>
            <h1>Mauris commodo quis imperdiet massa. Amet est placerat in egestas erat imperdiet sed euismod?</h1>
            <h3>Purus ut faucibus pulvinar elementum integer enim neque volutpat. Vitae congue eu consequat ac felis donec et. Sapien nec sagittis aliquam malesuada bibendum.</h3>
            <h1>Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque?</h1>
            <h3>At varius vel pharetra vel turpis nunc eget lorem dolor. Ac placerat vestibulum lectus mauris ultrices eros in. Nisi vitae suscipit tellus mauris a diam maecenas.</h3>
        </div>

    </div>
</template>

<script>
export default {
    name:"FAQ",
}
</script>

<style lang="scss" scoped>

#title{
    text-align: center;
    margin:0 auto;
    padding: 5rem 20rem;
    background-color: #AFCA90;
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 4rem;
        color: white;
        border-bottom: solid;  
    }
}

#questions{
    margin: 5rem auto;
    h1{
        font-family: 'Montserrat', sans-serif;
        margin: 2rem 15rem;
        font-weight: 400;
        padding-top: 2rem;
    }
    h3{
        margin: 0 20rem;
        display: list-item;                                            
        list-style-type: disc;       
        list-style-position: outside;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
}
</style>

