//signup.html
function signup() {
  // Armazena valores do signup
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;
  
  if (email === ''){
    alert('Por favor digite o email');
  } else if (password === '') {
    alert('Por favor digite a senha');
  } else if (password !== confirmPassword){
    alert('Senhas não são iguais!');
  } else {
    // Verifica se email já foi cadastrado
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExiste = users.some(user => user.email === email);

    if (userExiste) {
      alert('E-mail já está cadastrado!');
      window.location.href = 'login.html';
    } else {
      // Adiciona email e senha no Local Storage
      let user = {
        email: email,
        password: password
      };

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      // Redireciona para a página de login
      window.location.href = 'login.html';
    }
  }
}
