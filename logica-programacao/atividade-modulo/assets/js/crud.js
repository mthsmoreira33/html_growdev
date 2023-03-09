const email = sessionStorage.getItem('email');
const senha = sessionStorage.getItem('senha');
let recados = [];
const estaLogado = !!email;
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
let campoInput = document.getElementById('campoInput');
const recadosLocalStorage = JSON.parse(localStorage.getItem(email));


if (!estaLogado) {
    deslogar();
}

carregaRecados();


document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();
    renderizaRecados();

    const recado = {
        titulo: titulo.value,
        descricao: descricao.value
    };

    recados.push(recado);

    const email = sessionStorage.getItem('email');
    localStorage.setItem(email, JSON.stringify(recados));
})

//deleta todos elementos da página
document.getElementById('zerar').addEventListener('click', () => {
    const confirmar = confirm('Deseja MESMO deletar tudo?');
    if (confirmar) {
        const tituloH1 = document.querySelectorAll('h1');
        const descricaoP = document.querySelectorAll('p');
        const botaoEditarTitulo = document.querySelectorAll('button')
        tituloH1.forEach((element) => element.remove());
        descricaoP.forEach((element) => element.remove());
        botoes.innerHTML = '';
        return;
    }
    alert('Operação Cancelada');
})

//desloga o usuário
document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.clear();
    deslogar();
})

function deslogar() {
    window.location.href = '../html/login.html'
}

//renderiza os recados
function renderizaRecados() {
    const tituloH1 = document.createElement('h1');
    const descricaoP = document.createElement('p');
    const botaoEditarTitulo = document.createElement('button');
    const botaoEditarRecado = document.createElement('button');
    const wrapper = document.createElement('div');
    const divRecados = document.createElement('div');

    botaoEditarTitulo.id = 'botaoEditarTitulo';
    botaoEditarTitulo.innerHTML = `<i class="fi fi-bs-map-marker-edit"></i>`;
    botaoEditarTitulo.style = 'background-color: hsl(148, 100%, 35%); width: 40px; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px';
    botaoEditarTitulo.id = 'botaoEditarTitulo';
    botaoEditarRecado.innerHTML = `<i class="fi fi-bs-map-marker-edit"></i>`;
    botaoEditarRecado.style = 'background-color: hsl(148, 100%, 35%); width: 40px; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px';
    wrapper.style.display = 'flex';
    wrapper.style.flexFlow = 'column no-wrap';

    tituloH1.innerText = titulo.value;
    descricaoP.innerText = descricao.value;
    tituloH1.style = 'margin: 20px';
    descricaoP.style = 'margin: 10px';
    campoInput.appendChild(wrapper);
    wrapper.appendChild(divRecados)
    divRecados.appendChild(tituloH1);
    divRecados.appendChild(descricaoP);
    divRecados.appendChild(botaoEditarTitulo);
    divRecados.appendChild(botaoEditarRecado);
}

function carregaRecados() {
    if (recadosLocalStorage && recadosLocalStorage.length > 0) {
        recadosLocalStorage.forEach((recado) => {
            renderizaRecados();
        });
        return;
    }

    const semRecadosP = document.createElement('p');
    semRecadosP.innerText = 'Adicione seus recados';
    campoInput.appendChild(semRecadosP);
}
