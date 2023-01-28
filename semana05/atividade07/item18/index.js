let preco = 1000;
let parcelas = 10;
let precoParcelado =  preco / parcelas;
let juros = 0;

if(parcelas == 1) {
    const desconto = 0.25 * preco;
    preco = preco - desconto;
    console.log(`Você pagou à vista, ganhou um desconto de R$${desconto}. Preço total: ${preco}`);
} else if (parcelas >= 2 && parcelas <= 5) {
    console.log(`Você parcelou ${parcelas}x de ${precoParcelado.toFixed(2)} . Preço total: ${preco}`);
} else if (parcelas >= 6 && parcelas <= 10){
    juros = preco * 0.06 * parcelas;
    preco = preco + juros;
    precoParcelado = preco / parcelas;

    console.log(`Você parcelou ${parcelas}x de ${precoParcelado.toFixed(2)} com juros de 6% ao mês. Preço total: ${preco}`);
} else { 
    juros = preco * 0.13 * parcelas;
    preco = preco + juros;
    precoParcelado = preco / parcelas;
    
    console.log(`Você parcelou ${parcelas}x de ${precoParcelado.toFixed(2)} com juros de 13% ao mês. Preço total: ${preco}`);
}