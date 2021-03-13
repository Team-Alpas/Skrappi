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
                <img src='../assets/mark_ang.jpg'>
                <h2>Mark Christian Ang</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/markang812/'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/markang812'><img src='../assets/github_icon.png'></a> 
                </div>
            </div>
            <div id='person'>
                <img src='../assets/john_rivera.jpg'>
                <h2>John Rivera</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/john.b.rivera.39'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/johnrivera0987'><img src='../assets/github_icon.png'></a> 
                </div>
            </div>
            <div id='person'>
                <img src='../assets/mark_pagarigan.jpg'>
                <h2>Mark Austin Pagarigan</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/mark.austin.9066'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/MauiAus'><img src='../assets/github_icon.png'></a> 
                </div>
            </div>
            <div id='person'>
                <img src='../assets/iyah_reyes.jpg'>
                <h2>Maria Aliah Reyes</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/witchismariyah'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/witchismariyah'><img src='../assets/github_icon.png'></a> 
                </div>
            </div>
            <div id='person'>
                <img src='../assets/jacob_perez.jpg'>
                <h2>John Jacobsen Perez</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/JacobPerez72'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/JacobPerez72'><img src='../assets/github_icon.png'></a> 
                </div>
            </div>
            <div id='person'>
                <img src='../assets/yang_foronda.jpg'>
                <h2>Thea Denisse Foronda</h2>
                <div id='icons'>
                    <a href='https://www.facebook.com/tdfords'><img src='../assets/facebook.png'></a>
                    <a href='https://github.com/tdcforonda'><img src='../assets/github_icon.png'></a> 
                </div>
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
        filter: drop-shadow(10px 10px 4px #353131);
    }
    
}
h1{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    padding-top: 3rem;
}

#message{

    padding:5% 20%;
    text-align: justify;
    font-size: 1.75rem;
    background-color: #E0E0E0;

}

#teams{
    padding: 1rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    
    img{
        border-radius: 1rem;
        height: 30rem;
        width: 30rem;
        object-fit: cover;
        
    }

    
    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
}

#icons{
    img{
        padding: 0.5rem;
        position:relative;
        height: 3rem;
        width: 3rem;
        object-fit: contain;
        text-align: center;
    }
}

</style>
