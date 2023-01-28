let nome = prompt('Digite seu nome: ');
let genero = prompt('Digite seu gênero, m para homem e f para mulher');
let totalCompras = Number(prompt('Digite o total do valor das compras: '))
let desconto;

if (genero == 'm') {
    desconto = totalCompras * (5/100);
    console.log(`${nome}, sua compra deu um total de R$ ${totalCompras} e com o desconto de 5% sai à R$ ${totalCompras - desconto}. Feliz dia das Mulheres!`);
} else {
    desconto = totalCompras * (13/100);
    console.log(`${nome}, sua compra deu um total de R$ ${totalCompras} e com o desconto de 13% sai à R$ ${totalCompras - desconto}. Feliz dia das Mulheres!`);
}