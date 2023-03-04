const email = sessionStorage.getItem('email');
const senha = sessionStorage.getItem('senha');
const estaLogado = !!email;

if(!estaLogado) {
    window.location.href = '../html/login.html';
}

document.getElementById('add').addEventListener('submit', () => {
    const titulo = document.createElement('h1');
    const descricao = document.createElement('p');
    
})

document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.clear();
})

document.getElementById('zerar').addEventListener('click', () => {

})