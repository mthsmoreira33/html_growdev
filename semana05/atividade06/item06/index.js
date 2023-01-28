const largura = Number(prompt('Qual é a largura do lote em m: '));
const comprimento = Number(prompt('Qual é o comprimento do lote em m: '));
const m2 = largura * comprimento;

if(m2 < 100) {
    console.log('Terreno popular');
} else if (m2 < 500) {
    console.log('Terreno master');
} else {
    console.log('Terreno VIP')
}

