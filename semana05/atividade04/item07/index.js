let numPositivo = 0, numNegativo = 0, totalNumeros = 10

for (i = 0; i < totalNumeros; i++) {
    let numero = Number(prompt('Digite um número para começar a contagem ou digite 0 para reiniciar o programa'));
    if (numero === 0) {
        break;
    } else if (numero < 0) {
        numNegativo++;
    } else {
        numPositivo++;
    }
    let soma = numNegativo + numPositivo;
}
const media = soma / totalNumeros;

console.log(`A média dos números é ${media}`);
console.log(`A quantidade de números positivos: ${numPositivo}`);
console.log(`A quantidade de números negativos: ${numNegativo}`);

