const votosBrancos = 100, votosNulos = 200, votosValidos = 9000, totalEleitores = 10000;

if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
    console.log('Inválido: número de votos maior do que o total de eleitores')
} else {
    let pctBrancos = votosBrancos * 100;
    pctBrancos = pctBrancos / totalEleitores;

    let pctNulos = votosNulos * 100;
    pctNulos = pctNulos/ totalEleitores;

    let pctValidos  = votosValidos * 100;
    pctValidos = pctValidos / totalEleitores;

    console.log(`A porcentagem de votos brancos é ${pctBrancos}%`);
    console.log(`A porcentagem de votos nulos é ${pctNulos}%`);
    console.log(`A porcentagem de votos válidos é ${pctValidos}%`);
    console.log(`O total de votos é ${totalEleitores}`);
}