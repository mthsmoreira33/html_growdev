const card = document.querySelectorAll('.card'),
    tituloCard = document.querySelectorAll('.titulo-card'),
    descricaoCard = document.querySelectorAll('.descricao-card'),
    botaoEditar = document.querySelectorAll('.botao-editar'),
    botaoApagar = document.querySelectorAll('.botao-apagar');

card.forEach((cartao) => {
    cartao.setAttribute('style','background-color: #DD6600; box-shadow: 5px 3px 5px #004; line-height: 40px');
});

tituloCard.forEach((titulo) => {
    titulo.innerText = 'Meu Card';
    titulo.setAttribute('style','color: #008');
});

descricaoCard.forEach((descricao) => {
    descricao.innerText = 'Descrição alterada pelo Javascript';
    descricao.setAttribute('style','color: white');
});

botaoEditar.forEach((botao) => {
    botao.setAttribute('style','background-color: green; color: white; padding: 5px; border-radius: 10px; border-style: none');
    botao.onclick = editar;
});

botaoApagar.forEach((botao) => {
    botao.setAttribute('style','background-color: red; color: white; padding: 5px; border-radius: 10px; border-style: none');
    botao.onclick = apagar;
});

function editar() {
    alert('Clicou em editar');
}

function apagar() {
    const confirma = confirm('Deseja apagar?');
    if (confirma) {
        alert('Confirmado');
        return;
    }
    alert('Cancelado!');
}


