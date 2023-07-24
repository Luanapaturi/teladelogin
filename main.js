
document.getElementById('loginForm').addEventListener ('submit', function ( event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var passaword = document.getElementById('passaword').value;


    if(username === 'Luana' && passaword === '123'){
        alert('Login bem-sucedido!');
        window.location.href = 'teladelogin3.html'



    }else{
        alert('Usuario ou senha inválidos!');
    }


});