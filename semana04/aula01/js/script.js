let text = 'Hello World';
let nome = 'Madoso';
let idade;
idade = 22;
let altura = 1.78;
let idadeDaq5anos = idade + 5;

let frase = `${nome}, ${idade} anos, ${altura} de altura...`;
let fraseFuturo = `Daqui 5 anos você terá ${idadeDaq5anos}`;


function helloWorld() {
    document.getElementById('demo').innerHTML = frase;
    document.getElementById('idade').innerHTML = 11+11;
    alert("!!!");
    idade += 10, idadeDaq5anos = idade + 5, fraseFuturo = `Daqui 10 anos você terá ${idade} e daqui 15 anos você terá ${idadeDaq5anos}`;
    document.getElementById('idade-futura').innerHTML = fraseFuturo;
    console.log('debuggando no JS');
    print();
}