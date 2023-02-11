function login() {
  // Pega valores dos forms
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  //Verifica se email ou senha estão vazios
  if (email === '' || password === '') {
    alert('Por favor inserir email ou senha.');
  } else {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Verifica se email e senha estão no local storage
    let userExiste = users.some(user => user.email === email && user.password === password);
  if (userExiste) {
    alert('Bem vindo de volta!');
    window.location.href = 'crud.html';
  } else {
    alert('Email ou senhas incorretos');
  }
  }
}