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
        <p> Already have an account? Log in(should be hyperlink)</p>
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
    margin-left: 10rem;
}
#signup_txt{
    p{
        font-size: 2.5rem;
    }
}

#fname_lname{
    input{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        width:35%;
        padding: 2% 5%;
        box-sizing: border-box;
    }
    
}
input{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        width:80%;
        padding: 2% 5%;
        box-sizing: border-box;
    }


button {
  background-color: #18A0FB;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>