let preco = 100;
let parcela = 11;


if(parcela == 1) {
    let desconto = 0.25 * preco;
    preco = preco - desconto;
    console.log(`Você pagou à vista, ganhou um desconto de R$${desconto}. Preço total: ${preco}`);
} else if (parcela >= 2 && parcela <= 5) {
    console.log(`Você parcelou ${parcela}x. Preço total: ${preco}`);
} else if (parcela >= 6 && parcela <= 10){
    for(i = 1; i < parcela; i++) {
        preco =  preco + (0.06 * parcela);
    }
    console.log(`Você parcelou ${parcela}x com juros de 13% ao mês. Preço total: ${preco}`);
} else {
    for(i = 1; parcela > i; i++) {
        preco =  preco + (0.13 * parcela);
    }
    console.log(`Você parcelou ${parcela}x com juros de 6% ao mês. Preço total: ${preco}`);
}     




