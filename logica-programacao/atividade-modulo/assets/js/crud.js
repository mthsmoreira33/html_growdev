let users = JSON.parse(localStorage.getItem('users')) || [];
// Verifica se email e senha estão no local storage
let userExiste = users.some(user => user.email === email);

if (!userExiste) {
    window.location.href = '../html/login.html';
}

