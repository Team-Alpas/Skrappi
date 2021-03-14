<template>
    <div id='body'>
        <div id='panel'>
            <div id='prof_pic'>
                <img src='../assets/iyah_reyes.jpg'>
                <h1>Iyah Dela Cruz</h1>
            <div class='categories donations'>
                <h3>My Donations</h3>
            </div>
            <div class='categories charities'>
                <h3>My Charities</h3>
            </div>
            <div class='categories requests'>
                <h3>My Requests</h3>
            </div>
            <div class='categories ratings'>
                <h3>My Ratings</h3>
            </div>
            </div>
        </div>
        <div id='info'>
            <div id='donations'>
                <h1>My Donations</h1>
                <div id='image_array'>
                    <div id='container'>
                        <div id='bottlecaps'>
                            <img src='../assets/bottle_caps.jpg'>
                            <p>20kg of bottle caps</p>
                        </div>
                    </div>
                    <div id='container'>
                        <div id='cans'>
                            <img src='../assets/clothes.jpg'>
                            <p>10kg of clothes</p>
                        </div>
                    </div>
                    <div id='container'>
                        <div id='newspaper'>
                            <img src='../assets/newspaper.jpg'>
                            <p>25kg of newspapers</p>
                        </div>
                    </div>
                    <div id='container'>
                        <div id='cans'>
                            <img src='../assets/cans.jpg'>
                            <p>5kg of cans</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='charities'>
                <h1>My Charities</h1>
                <div id='image_array'>
                    <div id='container'>
                        <div id='bottlecaps'>
                            <img src='../assets/alay.png'>
                            <p>Alay Lakad Foundation</p>
                        </div>
                    </div>
                    <div id='container'>
                        <div id='cans'>
                            <img src='../assets/bantay.jpg'>
                            <p>Bantay Bata 163</p>
                        </div>
                    </div>
                    <div id='container'>
                        <div id='newspaper'>
                            <img src='../assets/gawad.jpg'>
                            <p>Gawad Kalinga</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'myaccount',
}
</script>

<style lang='scss' scoped>

#panel{
    float: left;
    height: 800px;
    width: 25rem;
    background-color: #4dd964;

}

#prof_pic{
    img{
        display: block;
        margin: 4rem auto;
        height: 50%;
        width: 50%;
        border-radius: 3rem 3rem;
    }
    h1{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: white;
    }
.categories{
    h3{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #ffffff;
        margin-left: 2rem;
    }
    border-top: 0.3rem solid #4dd964;

}  



}

#info{
    position: relative;
    left: 1.75rem;
    
    h1{
        color: #4dd964;
        text-decoration: underline;
    }
    #image_array{
    
        padding: 1rem 4rem;
        display: grid;
        gap:1rem;
        grid-template-columns: repeat(4, 1fr);
        text-align: center;
        

    
    #container{
        background-color: #4dd964;
        border-radius: 2rem;
        width: 16rem;
        p{
            color:white;
        }
    }
    
    img{
        margin:1rem;
        border-radius: 1rem;
        height: 10rem;
        width: 10rem;
        object-fit: cover;
        
    }

    
    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        
    }
    }
}

</style>