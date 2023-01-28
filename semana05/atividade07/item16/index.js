const anoAtual = 2023;
const anoNascimento = 20;

if (anoNascimento > anoAtual) {
    console.log('Opção inválida')
} else {
    if (anoAtual - anoNascimento >= 16) {
        console.log('Você poderá votar esse ano');
    } else {
        console.log('Você não poderá votar esse ano')
    }
}