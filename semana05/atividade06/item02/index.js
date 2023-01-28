let totalSalarioHomem = 0, totalSalarioMulher = 0;
let confirmacao = true;

while (confirmacao) {
    let genero = prompt('Digite o gênero m para homem e f para mulher: ');
    if (genero === 'm') {
        let salarioHomem = Number(prompt('Digite o salário: '));
        totalSalarioHomem = salarioHomem + totalSalarioHomem;
    } else if (genero === 'f') {
        let salarioMulher = Number(prompt('Digite o salario'));
        totalSalarioMulher = salarioMulher + totalSalarioMulher;
    } else {
        console.log('Opção Inválida');
        continue;
    }
    confirmacao = confirm('Clique em ok para continuar o programa, em cancelar para encerrar');
}

console.log(`O total de salários dos homens é ${totalSalarioHomem}`);
console.log(`O total de salários das mulheres é ${totalSalarioMulher}`);