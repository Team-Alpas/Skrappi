<template>
    <div id='body'>
        <div id="signup_txt">
            <p>Sign Up</p>
        </div>
        <div id='form_area'>
        <form>
            <div id='fname_lname'>
                <input type='text' id='fname' name="fname" placeholder="First Name">
                <input type='text' id='lname' name='lname' placeholder="Last Name"><br>
            </div>
            <input type='text' id='email' name='email' placeholder='Email address'><br>
            <input type='text' id='create_password' name='create_password' placeholder='Create password'><br>
            <input type='text' id='confirm_password' name='confirm_password' placeholder='Confirm password'><br>

        </form>
        </div>
        <p> Already have an account? <router-link  id="link" to="/Login">Login</router-link></p>
        <button>Register</button>
        
    </div>
</template>

<script>
export default {
    name:'signup',
}
</script>

<style lang='scss' scoped>


#body{
    padding-left: 15%;
}
#signup_txt{
    p{
        font-size: 2.5rem;
        color:#4dd964;
    }
}

#fname_lname{
    input{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        width:35%;
        padding: 1.5%;
        box-sizing: border-box;
        font-size: 1.75rem;
    }
    
}
input{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        width:80%;
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