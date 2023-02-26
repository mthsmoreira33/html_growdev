document.getElementById('botao').addEventListener('click', () => {
    const nomeUsuario = prompt('Digite aqui seu nome: ');
    document.getElementById('texto').innerText = `E aí ${nomeUsuario}, você agora tem um site dinâmico!`
})