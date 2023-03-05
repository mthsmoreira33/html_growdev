const valores = {
    valorBase: document.getElementById('valorBase'),
    valorTransporte: document.getElementById('valorTransporte'),
    valorAlimentacao: document.getElementById('valorAlimentacao'),
    receitaTotal: document.getElementById('receitaTotal'),
    valorAutomovel: document.getElementById('valorAutomovel'),
    faltas: document.getElementById('faltas'),
    totalDescontos: document.getElementById('totalDescontos'),
    valorTotal: document.getElementById('valorTotal')
}

for (const dado of Object.values(valores)) {
    const dadosLocalStorage = localStorage.getItem(dado.id);
    if (dadosLocalStorage !== null) {
        dado.value = dadosLocalStorage;
    }
}

document.getElementById('btnCalcular').addEventListener('click', () => {
    valores.receitaTotal.value = String(Number(valores.valorBase.value) + Number(valores.valorTransporte.value) + Number(valores.valorAlimentacao.value));
    valores.totalDescontos.value = String(Number(valores.valorAutomovel.value) + Number(valores.faltas.value))
    valorTotal.value = String(Number(valores.receitaTotal.value) - Number(valores.totalDescontos.value))

    for (const dado of Object.values(valores)) {
        localStorage.setItem(dado.id, dado.value);
    }
});

for (const dado of Object.values(valores)) {
    dado.addEventListener('blur', () => {
        valores.receitaTotal.value = String(
        Number(valores.valorBase.value) +
        Number(valores.valorTransporte.value) +
        Number(valores.valorAlimentacao.value)
        );
        valores.totalDescontos.value = String(
        Number(valores.valorAutomovel.value) +
        Number(valores.faltas.value)
        );
        valores.valorTotal.value = String(
        Number(valores.receitaTotal.value) -
        Number(valores.totalDescontos.value)
        );
    });
}
