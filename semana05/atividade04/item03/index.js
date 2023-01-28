let n = Number(prompt('Digite um número: '));
let i = Number(prompt('Por quantas vezes '+ n +' deve se multiplicar?'));
let operando = 0;

i++;

while (operando < i) {
    console.log(`${operando} * ${n} = ${operando * n}`);
    operando++;
}

