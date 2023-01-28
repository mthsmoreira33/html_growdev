let idades = 1, alunos = 0, totalIdades = 0;

while (true) {
    idades = Number(prompt('Digite uma idade ou digite 999 para encerrar o programa: '));
    if (idades == 999){
        break;
    }
    alunos++;
    totalIdades = totalIdades + idades; 
}

const media = totalIdades / alunos;
console.log(`Existem ${alunos} alunos na sala.`);
console.log(`A média da idade dos alunos é ${media}`);