const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];
//1. Imprima no console a quantidade de pessoas Total.

console.log(`Quantidade total de pessoa: ${data.length}`);

console.log('-----------------');

//2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

console.log(`Quantidade de pessoas do sexo feminino: ${data.filter(pessoa => pessoa.sexo === 'F').length}`);

console.log('-----------------');

//3. Imprima no console a soma do salário de todas as pessoas.

let soma = 0;
data.forEach(funcionario => soma += funcionario.salario);
console.log(`A soma dos salários de todos é: ${soma}`);

console.log('-----------------');

//4. Imprima no console a média do salário de todos funcionários

console.log(`A média do salário de todos é: ${soma / data.length}`);

console.log('-----------------');

//5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
let masculino = data.filter(funcionario => funcionario.sexo === 'M'); 
soma = 0;

masculino.forEach(funcionario => soma += funcionario.salario)

console.log(`Salário de pessoas do sexo masculino: ${soma}`);

console.log('-----------------');

//6. Imprima no console a média do salário de todas as pessoas do sexo Masculino

console.log(`Média de salarios de pessoas do sexo masculino: ${soma / masculino.length}`);

console.log('-----------------');

//7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
let temSalarioMaior = data.some(funcionario => funcionario.salario > 7000);

if (temSalarioMaior){
    console.log('Tem salario maior que 7000');
} else {
    console.log('Não tem salário maior que 7000');
}

console.log('-----------------');

//8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
console.log(data.findIndex(funcionario => funcionario.nome === 'Eva Trindade'));
console.log('-----------------');

//9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
console.log(data.filter(funcionario => funcionario.nome.includes('Silva')));
console.log('-----------------');

//10. Imprima os nomes utilizando o MAP
console.log(data.map(funcionario => funcionario.nome));