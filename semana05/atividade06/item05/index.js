let distancia = Number(prompt('Qual é a distância em KM que você deseja viajar?'));
let passagem;

if (distancia > 200) {
    passagem = 0.45 * distancia;
} else {
    passagem = 0.5 * distancia;
}
console.log(`O preço da sua passagem é R$${passagem}`);