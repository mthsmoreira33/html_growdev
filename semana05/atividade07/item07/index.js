let num = 10, soma = 0;

do {
    soma = soma + num;
    num++;
} while (num >= 10 && num <= 100)

console.log(`A soma de todos os números entre 10 e 100 é ${soma}`);