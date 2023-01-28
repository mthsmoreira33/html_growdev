let lista = '';

for (numero = 30; numero >= 1; numero--) {
    let contaDivisores = 0;
    for(i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contaDivisores++
        }
    }
    if (contaDivisores == 2) {
        lista += ` [${numero}] `;
    } else {
        lista += ` ${numero} `;
    }
}
console.log(lista);