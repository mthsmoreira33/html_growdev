function login() {
  // Pega valores dos forms
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  //Verifica se email ou senha estão vazios
  if (email === '' || password === '') {
    alert('Por favor inserir email ou senha.');
  } else {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Verifica se o email está cadastrado
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        // Redireciona para o CRUD
        window.location.href = 'crud.html';
        return;
      }
    }
    
    alert('Email or password is incorrect');
  }
}