/*
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00
*/



/*let notas = [50, 10, 5, 1];
let res = [0, 0, 0, 0];
let valores = 0; */

let saque = Number(prompt('Digite o valor desejado: '));
let notasSacadas50 = 0;
let notasSacadas10 = 0;
let notasSacadas5 = 0;
let notasSacadas1 = 0;

while (saque >= 50) {
    saque = saque - 50;
    notasSacadas50++;
}

while (saque >= 10) {
    saque = saque - 10;
    notasSacadas10++;
}

while (saque >= 5) {
    saque = saque - 5;
    notasSacadas5++;
}

while (saque >= 1) {
    saque = saque - 1;
    notasSacadas1++;
}

console.log(`Notas de 50 sacadas: $[notasSacadas50]`);
console.log(`Notas de 10 sacadas: $[notasSacadas10]`);
console.log (`Notas de 5 sacadas: $[notasSacadas5]`);
console.log (`Notas de 1 sacadas: $[notasSacadas1]`);

