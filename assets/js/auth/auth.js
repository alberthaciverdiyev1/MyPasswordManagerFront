document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('login').addEventListener('click', function() {
        document.getElementById('registerForm').classList.toggle('hidden');
        document.getElementById('loginFormContainer').classList.toggle('hidden');
    });
    document.getElementById('sign_up').addEventListener('click', function() {
        document.getElementById('loginFormContainer').classList.toggle('hidden');
        document.getElementById('registerForm').classList.toggle('hidden');
    });


});
