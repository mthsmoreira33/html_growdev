console.log('Item 01');

const mouse = {
    preco: 90,
    descricao: 'Mouse'
};
console.log(mouse);

console.log('Item 02');

const notebook = {
    processador: 'i7',
    memoria: '16GB',
    preco: 5000,
    hd: '1TB',
    ssd: '256GB'
};

console.log(`Processador = ${notebook.processador}\n Memória = ${notebook.memoria}\n Preço = ${notebook.preco}\n HD = ${notebook.hd}\n SSD = ${notebook.ssd}`);


console.log('Item 03')
const aluno1 = {
    nome: 'Matheus',
    nota1: 10,
    nota2: 5
}, 
aluno2 = {
    nome: 'Pedro',
    nota1: 8,
    nota2: 8
};


console.log(`Aluno 1 \n Nome: ${aluno1.nome}, Nota 1: ${aluno1.nota1}, Nota 2: ${aluno1.nota2}, Média: ${(aluno1.nota1 + aluno1.nota2)/2}`);

console.log(`Aluno 2 \n Nome: ${aluno2.nome}, Nota 1: ${aluno2.nota1}, Nota 2: ${aluno2.nota2}, Média: ${(aluno2.nota1 + aluno2.nota2)/2}`);


console.log('Item 04');

const alunos = [{
    nome: 'Tarantino',
    idade: 29,
    skills: ['JavaScript', 'Python', 'CSS']
},{
    nome: 'Pollock',
    idade: 30,
    skills: ['PHP', 'C#', 'Python']
},{
    nome: 'Bay',
    idade: 40,
    skills: ['CSS', 'JavaScript', 'Java']
},{
    nome: 'Godard',
    idade: 18,
    skills: ['Python', 'Flutter']
},{
    nome: 'Lee',
    idade: 27,
    skills: ['Java', 'JavaScript', 'CSS']
}];


function mostrarAlunos(aluno, skill){
    const filtro = aluno.filter(index => index.skills.includes(skill));
    console.log(filtro);
}


mostrarAlunos(alunos, 'JavaScript');

console.log('Item 05');

let confirmacao = true;
const desempregados = [];
const salarioMenor = [];
const salarioMaior = [];
    
while(confirmacao) {
    
    const cadastro = {
        nome: prompt('Informe o nome:'),
        idade: Number(prompt('Informe a idade')),
        empregado: prompt('Está empregado? \n [s] para sim \n [n] para não'),
        salario: ''
    }

    if(cadastro.empregado === 's') {
        cadastro.salario = Number(prompt('Informe seu salário:'));
    }
    if(cadastro.empregado === 'n') {
        desempregados.push(cadastro);
    } else if(cadastro.empregado === 's' && cadastro.salario < 2500) {
        salarioMenor.push(cadastro);
    } else if(cadastro.empregado === 's' && cadastro.salario > 2500) {
        salarioMaior.push(cadastro);
    } else if(cadastro.empregado !== 's' && cadastro.empregado !== 'n') {
        console.log('Opção inválida');
    }

    confirmacao = confirm('Você deseja continuar?');
}

console.log('Pessoas que estão desempregadas: ', desempregados);
console.log('Pessoas que recebem um salario menor que 2500: ', salarioMenor);
console.log('Pessoas que recebem mais que 2500: ', salarioMaior);

