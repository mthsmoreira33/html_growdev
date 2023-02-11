let recados = JSON.stringify([]);

//Verifica se há recados no local storage e carrega
if (localStorage.getItem('recados')) {
  recados = JSON.parse(localStorage.getItem('recados'));
  renderizaLista();
}

function addDados() {
  // Adiciona novos recados à lista
  let input = document.getElementById('input-field');
  let recadoNovo = input.value;
  input.value = '';

  //Adiciona o titulo do recado
  let inputTitle = document.getElementById('input-title');
  let tituloNovo = inputTitle.value;
  inputTitle.value = '';

  recados.push({titulo: tituloNovo, recado: recadoNovo});
  renderizaLista();
  salvaLista();
}

// Remove dados da lista
function removeDados(index) {
  recados.splice(index, 1);
  renderizaLista();
  salvaLista();
}

// Atualiza dados na lista
function atualizaTitulo(index) {
  let valorAtualizado = prompt('Atualize o título:');
  recados[index].titulo = valorAtualizado;
  renderizaLista();
  salvaLista();
}

// Atualiza dados na lista
function atualizaRecado(index) {
  let valorAtualizado = prompt('Atualize a descrição:');
  recados[index].recado = valorAtualizado;
  renderizaLista();
  salvaLista();
}

// Renderiza dados da lista
function renderizaLista() {
  let tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  for (let i = 0; i < recados.length; i++) {
    let dado = recados[i];
    
    let linha = document.createElement('tr');

    let celulaTitle = document.createElement('td');
    celulaTitle.innerHTML = recados[i].titulo;

    let celula = document.createElement('td');
    celula.innerHTML = recados[i].recado;

    let acoes = document.createElement('td');

    let botaoAtualizarTitulo = document.createElement('button');

    botaoAtualizarTitulo.innerHTML = 'Atualizar Titulo';
    botaoAtualizarTitulo.addEventListener('click', function() {
      atualizaTitulo(i);
    });

    let botaoAtualizarRecado = document.createElement('button');
    botaoAtualizarRecado.innerHTML = 'Atualizar Descrição';
    botaoAtualizarRecado.addEventListener('click', function() {
      atualizaRecado(i);
    });


    let botaoRemover = document.createElement('button');
    botaoRemover.innerHTML = 'Remove';

    botaoRemover.addEventListener('click', function() {
      removeDados(i);
    });

    acoes.appendChild(botaoAtualizarTitulo);
    acoes.appendChild(botaoAtualizarRecado);
    acoes.appendChild(botaoRemover);
    linha.appendChild(celulaTitle);
    linha.appendChild(celula);
    linha.appendChild(acoes);
    tableBody.appendChild(linha);
  }
}

// Salva o recado no local storage
function salvaLista() {
  localStorage.setItem('recados', JSON.stringify(recados));
}

// Adiciona event listener ao clicar no botão
let botaoAdicionar = document.getElementById('add-button');
botaoAdicionar.addEventListener('click', addDados);

// Adiciona event listener no campo de input caso o usuario digite Enter
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

