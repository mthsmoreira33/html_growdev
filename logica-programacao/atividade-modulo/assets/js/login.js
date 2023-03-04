document.getElementById('formularioLogin').addEventListener('submit', e => {
  // Pega valores dos forms
  e.preventDefault();
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  //Verifica se email ou senha estão vazios
  let users = JSON.parse(localStorage.getItem('users')) || [];
  // Verifica se email e senha estão no local storage
  let userExiste = users.find(user => user.email === email && user.senha === senha);
  
  if (userExiste) {
    alert('Bem vindo de volta!');
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('senha', senha);
    window.location.href = '../html/crud.html';
  } else {
    alert('Email ou senhas incorretos');
  }
})