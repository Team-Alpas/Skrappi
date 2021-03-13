  <template>
    <div id='body'>
        <div id='about'>
            <p>About Alpas Tech</p>
            <img id='face' src='../assets/skrappi_face.png'>
        </div>
        <div id='message'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <h1>The Team Behind Skrappi</h1>
        <div id='teams'>
        
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>
            <div id='person'>
                <img src='../assets/arurinh.png'>
                <h3>Aru Rinh</h3>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'About',
}
</script>

<style lang='scss' scoped>
#about{
    text-align: center;
    background-color: #66883F;

    p{
        padding-top: 2rem;
        color: #EFE1BA;
        font-size: 3rem;
        //font-weight: bold;
    

    }
    #face{
        height: 15rem;
        padding-bottom: 4rem;
        position: relative;
    }
    
}
h1{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

#message{

    padding:5% 20%;
    text-align: justify;
    font-size: 1.75rem;
    background-color: #E0E0E0;

}

#teams{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    h3{

    }
}
</style>
