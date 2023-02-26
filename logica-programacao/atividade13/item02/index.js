let i = 0;
document.getElementById('botaoIncrementar').addEventListener('click', (e) => {
    e.preventDefault();
    i++;
    if (i === 1){
        document.getElementById('texto').innerText = `O contador está com ${i} clique`;
        return;
    }
    document.getElementById('texto').innerText = `O contador está com ${i} cliques`
});

document.getElementById('botaoZerar').addEventListener('click', (e) => {
    e.preventDefault();
    i = 0;
    document.getElementById('texto').innerText = `O contador está com ${i} cliques`;
})