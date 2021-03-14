<template>
    <div class="Donate">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="header">
            <div>""</div>
            <div class="container">
                <div class="inner">
                    <h1>Donate your waste</h1>
                    <p>Donating recyclable items to others will not only help others <br>that need it, but also the environment. So donate now!</p>
                    <div class="search-box">
                        <a class="search-btn" href="#"><i class="fas fa-search fa-lg"></i></a>
                            <input class="search-txt" type="text" name="" placeholder="Search requests near you.">
                        <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="cardcontainer">
                <div class="cardheader">
                    <h1>Requests Listing</h1>
                </div>
                <div class="cardbody">
                    <div class="card">
                        <div id="icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="cardtext">
                            <h1>Water Bottles</h1>
                        </div>
                        <div style="text-align:center;color:#333C1A">
                            <h2>2km away</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div id="icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="cardtext">
                            <h1>Newspapers</h1>
                        </div>
                        <div style="text-align:center;color:#333C1A">
                            <h2>69km away</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div id="icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="cardtext">
                            <h1>Plastic Cups</h1>
                        </div>
                        <div style="text-align:center;color:#333C1A">
                            <h2>420km away</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div id="icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="cardtext">
                            <h1>Broken Television</h1>
                        </div>
                        <div style="text-align:center;color:#333C1A">
                            <h2>3m away</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Donate',
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        grid-template-rows: 100px 300px;
        align-items: center;
        position: relative;
        z-index: 0;
        min-height: 230px;
        background-size: cover;
        display: grid;
        background-image: url(../assets/headerbg.jpg);
        .container{
            font-family: Montserrat, sans-serif;
            z-index: 3;
            position: relative;
            height: 100%;
            background-color: white;
            width: 80%;
            margin: 0 auto;
            box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            text-align: center;
            padding: 38px;
            min-height: 140px;
            .inner {
                width: 75rem;
                max-width: calc(100% - 6rem);
                text-align:center;
                margin-top:5%;
                margin-left: auto;
                margin-right: auto;
            }
            h1{
                font-weight: 300;
                font-size: 75px;
                line-height: 1.2;
                text-transform: uppercase;
                margin: 0 0 1.5rem 0;
                color: #333C1A;
            }
            p{
                font-size: 1.5rem;
                margin: 0 0 2rem 0;
                padding-bottom: 5px;
                border: 0;
                font-style: inherit;
                vertical-align: baseline;
                color: #333C1A;
            }
            .search-box {
                position:absolute;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                background: white;
                height: 24px;
                padding: 10px;
                border-radius: 10px;
                border-color:gray;
                border-style: solid;
                border-width: thin;
                min-width: 300px;
                max-width:30%;
                margin-left: auto;
                margin-right: auto; //hi
                left: 0;
                right: 0;
                text-align: center;
                &:hover {
                    transition: 0.3s ease-in-out;
                    background: #bfe192;
                    .search-btn{
                        color:white;
                    }
                    .caret-down-btn {
                        color:white;
                    }
                }
            }
            .search-btn {
                color: #70D1AC;
                margin: 0px 10px;
            }
            .search-txt {
                border: none;
                background: none;
                outline: none;
                padding: 0;
                color: #404040;
                font-size: 100%;
                transition: 0.4s;
                line-height: 20px;
                width: 100%;
            }
            .caret-down-btn {
                color: #70D1AC;
                float: right;
                margin-right: 10px;
                &:hover { color: white; }
            }
        }
        &::after{
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background: linear-gradient(180deg, white 0%, rgba(72, 212, 156, 0.71) 100%);
        }
    }
    .body{
        font-family: Montserrat, sans-serif;
        padding: 24px 12px;
        padding-top: 118px;
        .cardheader{
            font-family: inherit;
            text-align: center;
            margin-bottom: 40px;
            color: #333C1A;
        }
        .cardbody{
            font-family: inherit;
            width: 80%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 20px;
        }
        .card{
            font-family: inherit;
            line-height: 27px;
            align-items: center;
            padding: 12px;
            margin-bottom: 1rem;
            text-decoration: none;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
            font-size: 12px;
            border-radius: 8px;
            display: grid;
            grid-template-columns: 20px 1fr 60px;
            background: #FFF;
            color: #70D1AC;
        }
        #icon{
            font-size: 16px;
        }
    }
</style>

