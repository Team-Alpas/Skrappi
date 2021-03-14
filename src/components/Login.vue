<template>
    <div id='body'>
        <div id="login_txt">
            <p>Log in</p>
        </div>
        <div id='form_area'>
        <form>
            <input type='text' id='email' name='email' placeholder='Email address'><br>
            <input type='text' id='password' name='password' placeholder='Password'><br>

        </form>
        </div>
        <p> Don't have an account yet? <router-link  id="link" to="/signup">Sign Up</router-link></p>
        <button>Log In</button>
        
    </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<style lang='scss' scoped>


#body{
    padding-left: 15%;
    padding-top: 2%;
    padding-bottom: 15%;
    min-height: 100%;
    //background-color:#95d458;
    color: #4dd964;
}
#login_txt{
    p{
        font-size: 2.5rem;
        color: #4dd964;
    }
}

input{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        border-color: white;
        width:60%;
        padding: 1.5%;
        box-sizing: border-box;
        font-size: 1.75rem;
    }


button {
  background-color: #4dd964;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 4%;
}
</style>
