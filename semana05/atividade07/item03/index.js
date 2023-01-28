const numero = Number(prompt('Digite um número de 1 a 7'));
let diaDaSemana = ['', 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

if (numero < 1 || numero > 7) {
    console.log('Opção inválida');
} else if (numero >= 1 || numero <= 7) {
    console.log(diaDaSemana[numero]);
}