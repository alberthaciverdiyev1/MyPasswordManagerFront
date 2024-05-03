

import  {checkEmpty}  from '../helpers/validate.js';
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector(`[data-role="login"]`).addEventListener('click', async function () {
        let data = {}; 
          data = {
            email: document.getElementById(`login-email`),
            password: document.getElementById(`login-password`),
        };
        data =  checkEmpty(data);

        data["rememberMe"] = document.querySelector(`[data-role="login-remember-me"]`).checked;
        console.log(data);
        fetch('/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });        
    });
    
    document.querySelector(`[data-role="register"]`).addEventListener('click', function () {
        console.log("register");
    });

    document.getElementById('login').addEventListener('click', function () {
        document.getElementById('registerForm').classList.toggle('hidden');
        document.getElementById('loginFormContainer').classList.toggle('hidden');
    });
    document.getElementById('sign_up').addEventListener('click', function () {
        document.getElementById('loginFormContainer').classList.toggle('hidden');
        document.getElementById('registerForm').classList.toggle('hidden');
    });
});
