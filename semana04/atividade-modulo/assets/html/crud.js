let listaDados = [];

//Verifica se há dados no local storage e carrega
if (localStorage.getItem('listaDados')) {
  listaDados = JSON.parse(localStorage.getItem('listaDados'));
  renderizaLista();
}

// Adiciona novos dados à lista
function addDados() {
  let input = document.getElementById('input-field');
  let dadoNovo = input.value;
  input.value = '';
  listaDados.push(dadoNovo);
  renderizaLista();
  salvaLista();
}

// Remove dados da lista
function removeDados(index) {
  listaDados.splice(index, 1);
  renderizaLista();
  salvaLista();
}

// Atualiza dados na lista
function atualizaDados(index) {
  let valorAtualizado = prompt('Enter the new dado:');
  listaDados[index] = valorAtualizado;
  renderizaLista();
  salvaLista();
}

// Renderiza dados da lista
function renderizaLista() {
  let tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';
  for (let i = 0; i < listaDados.length; i++) {
    let dado = listaDados[i];
    let linha = document.createElement('tr');
    let celula = document.createElement('td');
    celula.innerHTML = dado;
    let acoes = document.createElement('td');
    let botaoAtualizar = document.createElement('button');
    botaoAtualizar.innerHTML = 'Update';
    botaoAtualizar.addEventListener('click', function() {
      atualizaDados(i);
    });
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', function() {
      removeDados(i);
    });
    acoes.appendChild(botaoAtualizar);
    acoes.appendChild(removeButton);
    linha.appendChild(celula);
    linha.appendChild(acoes);
    tableBody.appendChild(linha);
  }
}

// Save the dado list to local storage
function salvaLista() {
  localStorage.setItem('listaDados', JSON.stringify(listaDados));
}

// Add event listener to the add button
let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addDados);

// Add event listener to the input field
let input = document.getElementById('input-field');
    input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
    addDados();
    }
});


function logout() {
  // Remove dado de login da Session Storage
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('password');
  // Redireciona para página de login
  window.location.href = 'login.html';
};

