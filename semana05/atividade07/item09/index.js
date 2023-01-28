const numero = 1;

let contaDivisores = 0;

for(i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        contaDivisores++;
    }
} if (contaDivisores == 2) {
    console.log('É um número primo');
} else {
    console.log('Não é um número primo');
}