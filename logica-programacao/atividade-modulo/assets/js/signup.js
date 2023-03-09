//signup.html
document.getElementById('formularioSignup').addEventListener('submit', e => {
  // Armazena valores do signup
  e.preventDefault();
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  let confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha){
    alert('Senhas não são iguais!');
    return;
  }

  // Verifica se email já foi cadastrado
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let userExiste = users.some(user => user.email === email);

  if (userExiste) {
    alert('E-mail já está cadastrado!');
    window.location.href = '../html/login.html';
  }

  // Adiciona email e senha no Local Storage
  let user = {
    email: email,
    senha: senha
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Faz login direto
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('senha', senha);

  // Redireciona para a página de login
  window.location.href = '../html/crud.html';
})
