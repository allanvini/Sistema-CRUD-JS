document.getElementById('login-send').addEventListener('click', async ()=>{
    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;

    let access = await(auth(email,password));
    console.log(access);

    if(access){
        alert('logado com sucesso');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    } else {
        alert ('login ou senha incorretos');
    }
})