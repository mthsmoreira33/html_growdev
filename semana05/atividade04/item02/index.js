let alturaPedro = 1.50, 
    alturaLucas = 1.10,
    ano = 0;

while (alturaLucas.toFixed(2) <= alturaPedro.toFixed(2)) {
    if (alturaPedro.toFixed(2) > alturaLucas.toFixed(2)) {
        alturaPedro = alturaPedro + 0.02;
        alturaLucas = alturaLucas + 0.03;
        ano++;
    }
    if (alturaPedro.toFixed(2) == alturaLucas.toFixed(2)) {
        console.log (`Lucas precisaria de ${ano} anos para ficar com ${alturaLucas.toFixed(2)} mesma altura de Pedro: ${alturaPedro.toFixed(2)}`)
        ano++;
        alturaPedro = alturaPedro + 0.02;
        alturaLucas = alturaLucas + 0.03;
        console.log (`Lucas precisaria de ${ano} anos para ficar maior: ${alturaLucas.toFixed(2)} que Pedro: ${alturaPedro.toFixed(2)}`)
    }
    
}



