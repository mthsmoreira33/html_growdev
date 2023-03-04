document.getElementById('btnCalcular').addEventListener('click', () => {
    document.getElementById('receitaTotal').value = String(Number(document.getElementById('valorBase').value) + Number(document.getElementById('valorTransporte').value) + Number(document.getElementById('valorAlimentacao').value));
    document.getElementById('totalDescontos').value = String(Number(document.getElementById('valorAutomovel').value) + Number(document.getElementById('faltas').value))
    document.getElementById('valorTotal').value = String(Number(document.getElementById('receitaTotal').value) - Number(document.getElementById('totalDescontos').value))
})
