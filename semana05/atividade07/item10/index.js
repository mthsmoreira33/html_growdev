let altura = Number(prompt('Digite sua altura em m: '));
let genero = Number(prompt('Digite seu genero, 1 para mulher, 2 para homem: '));
let pesoIdeal = 0;

if (isNaN(genero) || genero < 1 || genero > 2){
    console.log('Opção inválida');
} else if (genero === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    pesoIdeal = (72.7 * altura) - 58;
}

console.log(`O seu peso ideal é ${pesoIdeal.toFixed(2)}`);