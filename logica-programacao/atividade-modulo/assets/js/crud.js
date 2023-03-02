const estaLogado = !!sessionStorage.getItem('user');

if(!estaLogado) {
    window.location.href = '../html/login.html'
}
