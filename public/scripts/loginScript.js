document.getElementById('login-send').addEventListener('click', async ()=>{
    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;

    let access = await(auth(email,password));

    if(access){
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = "block";
        setTimeout(()=>{
            document.getElementById('login-error').style.display = "none";
        }, 2000)
    }
})