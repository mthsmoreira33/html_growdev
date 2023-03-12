const email = sessionStorage.getItem("email");
const senha = sessionStorage.getItem("senha");
let recados = [];
const estaLogado = !!email;
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
let campoInput = document.getElementById("campoInput");
const semRecadosP = document.createElement("p");

const recado = {
  titulo: "",
  descricao: "",
};

if (!estaLogado) {
  window.location.href = "../html/login.html";
}

const recadosLocalStorage = JSON.parse(localStorage.getItem(email) || "[]");
if (recadosLocalStorage == 0) {
  semRecadosP.innerText = "Adicione seus recados";
  campoInput.appendChild(semRecadosP);
  semRecadosP.style = "text-align: center; font-size: 25px";
} else {
  recadosLocalStorage.forEach((rec) => {
    const tituloH1 = document.createElement("h1");
    const descricaoP = document.createElement("p");
    const botaoEditarTitulo = document.createElement("button");
    botaoEditarTitulo.onclick = editarTitulo;
    const botaoEditarRecado = document.createElement("button");
    botaoEditarRecado.onclick = editarRecado;
    const apagar = document.createElement('button');
    apagar.onclick = apagarRecado;
    const wrapper = document.getElementById("wrapper");
    const divRecados = document.createElement("div");

    botaoEditarTitulo.id = "botaoEditarTitulo";
    botaoEditarTitulo.innerText = 'Atualizar Título';
    botaoEditarTitulo.style =
      "background-color: hsl(148, 100%, 35%); width: 40%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    botaoEditarRecado.id = "botaoEditarRecado";
    botaoEditarRecado.innerText = 'Atualizar Recado';
    botaoEditarRecado.style =
    "background-color: hsl(148, 100%, 35%); width: 40%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    apagar.id = "apagar";
    apagar.innerText = 'Apagar';
    apagar.style =
    "background-color: hsl(148, 100%, 35%); width: 15%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    tituloH1.innerText = rec.titulo;
    descricaoP.innerText = rec.descricao;
    tituloH1.style = "margin: 20px";
    descricaoP.style = "margin: 10px";
    campoInput.appendChild(wrapper);
    wrapper.appendChild(divRecados);
    divRecados.appendChild(tituloH1);
    divRecados.appendChild(descricaoP);
    divRecados.appendChild(botaoEditarTitulo);
    divRecados.appendChild(botaoEditarRecado);
    divRecados.appendChild(apagar);
  });
}

document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    semRecadosP.innerText = "";
    const tituloH1 = document.createElement("h1");
    const descricaoP = document.createElement("p");
    const botaoEditarTitulo = document.createElement("button");
    botaoEditarTitulo.onclick = editarTitulo;
    const botaoEditarRecado = document.createElement("button");
    botaoEditarRecado.onclick = editarRecado;
    const apagar = document.createElement('button');
    apagar.onclick = apagarRecado;
    const wrapper = document.getElementById("wrapper");
    const divRecados = document.createElement("div");
    divRecados.id = 'divRecados';

    //adiciona atributos do Botão de Editar Título
    botaoEditarTitulo.id = "botaoEditarTitulo";
    botaoEditarTitulo.innerText = 'Atualizar Título';
    botaoEditarTitulo.style =
      "background-color: hsl(148, 100%, 35%); width: 40%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    //adiciona atributos do Botão de Editar Recado
    botaoEditarRecado.id = "botaoEditarRecado";
    botaoEditarRecado.innerText = 'Atualizar Recado';
    botaoEditarRecado.style =
    "background-color: hsl(148, 100%, 35%); width: 40%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    apagar.id = "apagar";
    apagar.innerText = 'Apagar';
    apagar.style =
    "background-color: hsl(148, 100%, 35%); width: 15%; font-size: 20px; color: hsl(0, 0%, 100%); padding: 5px; margin-right: 5px; margin-left: 5px; cursor: pointer";

    tituloH1.innerText = titulo.value;
    descricaoP.innerText = descricao.value;
    tituloH1.style = "margin: 20px";
    descricaoP.style = "margin: 10px";
    campoInput.appendChild(wrapper);
    wrapper.appendChild(divRecados);
    divRecados.appendChild(tituloH1);
    divRecados.appendChild(descricaoP);
    divRecados.appendChild(botaoEditarTitulo);
    divRecados.appendChild(botaoEditarRecado);
    divRecados.appendChild(apagar);
    recado.titulo = tituloH1.innerText;
    recado.descricao = descricaoP.innerText;
    const recadosLocalStorage = JSON.parse(localStorage.getItem(email)) || [];

    // Get the new data to be added
    const novoRecado = {
        titulo: titulo.value,
        descricao: descricao.value,
    };

    recadosLocalStorage.push(novoRecado);
    localStorage.setItem(email, JSON.stringify(recadosLocalStorage));
});

//deleta todos elementos da página
document.getElementById("zerar").addEventListener("click", () => {
  const confirmar = confirm("Deseja MESMO deletar tudo?");
  if (confirmar) {
    const tituloH1 = document.querySelectorAll("h1");
    const descricaoP = document.querySelectorAll("p");
    const botoesEditarTitulo = document.querySelectorAll("#botaoEditarTitulo");
    const botoesEditarRecados = document.querySelectorAll("#botaoEditarRecado")
    const wrapper = document.querySelectorAll("#wrapper")
    tituloH1.forEach((element) => element.remove());
    descricaoP.forEach((element) => element.remove());
    botoesEditarTitulo.forEach((element) => element.remove());
    botoesEditarRecados.forEach((element) => element.remove());
    wrapper.forEach((element) => element.innerHTML = '');
    return;
  }
  alert("Operação Cancelada");
});

//desloga o usuário
document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "../html/login.html";
});


function editarTitulo(e) {
    const button = e.target;
    const parent = button.parentNode;
    const h1 = parent.querySelector("h1");
    const novoTitulo = prompt("Insira o novo título:");
    if (novoTitulo) {
        h1.innerText = novoTitulo;
        const index = Array.from(parent.parentNode.children).indexOf(parent);
        const recadosLocalStorage = JSON.parse(localStorage.getItem(email)) || [];
        recadosLocalStorage[index].titulo = novoTitulo;
        localStorage.setItem(email, JSON.stringify(recadosLocalStorage));
    }
}

function editarRecado(e) {
  const button = e.target;
  const parent = button.parentNode;
  const p = parent.querySelector("p");
  const novoRecado = prompt("Insira o novo recado:");
  if (novoRecado) {
      p.innerText = novoRecado;
      const index = Array.from(parent.parentNode.children).indexOf(parent);
      const recadosLocalStorage = JSON.parse(localStorage.getItem(email)) || [];
      recadosLocalStorage[index].descricao = novoRecado;
      localStorage.setItem(email, JSON.stringify(recadosLocalStorage));
  }
}

function apagarRecado(e) {
  const confirmar = confirm("Deseja apagar o recado?");
  if (confirmar) {
    const botao = e.target;
    const parent = botao.parentNode;
    const index = Array.from(parent.parentNode.children).indexOf(parent);
    parent.remove();

    // Get the items from localStorage as an array
    let items = JSON.parse(localStorage.getItem("recados")) || [];

    // Remove the item at the specified index
    items.splice(index, 1);

    // Save the updated array back to localStorage
    localStorage.setItem("recados", JSON.stringify(items));
  }
}
