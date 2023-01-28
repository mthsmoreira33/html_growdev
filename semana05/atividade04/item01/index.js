let alturas = [1.73, 1.75, 1.70, 1.68, 1.55, 1.78, 1.59, 1.82, 1.77, 1.98, 1.85, 1.72, 1.80, 1.50, 1.67],
    i = 0,
    menorAltura = alturas[i],
    maiorAltura = alturas[i];

while (i < 15) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
    }
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
    }
    i++;
}

console.log(`Menor altura: ${menorAltura}, Maior altura: ${maiorAltura}`);
