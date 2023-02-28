//signup.html
document.getElementById('btn').addEventListener('click', () =>  {
  // Armazena valores do signup
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;
  
  if (email === ''){
    alert('Por favor digite o email');
    return;
  }

  if (password === '') {
    alert('Por favor digite a senha');
    return;
  } 

  if (password !== confirmPassword){
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
    password: password
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Redireciona para a página de login
  window.location.href = '../html/login.html';
})