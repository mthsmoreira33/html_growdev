function mediaItem01(nota1, nota2, nota3, letra) {
    let media;
    if (letra === 'a' || letra === 'A') {
        media = (nota1 + nota2 + nota3) / 3;
        console.log(media);
        return media;
    } else if (letra === 'p' || letra === 'P') {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
        console.log(media);
        return media;
    } else {
        console.log('operação inválida');
        return false;
    }
}

function item02(num) {
    if(num % 2 !== 0) {
        console.log('Número impar');
        return true;
    } else {
        return false;
    }
}

function item03(num) {
    if (num % 5 != 0 && num % 3 != 0 && num % 2 != 0 || num === 2 || num === 3 || num === 5) {
        console.log('é primo');
        return true;
      } else {
        console.log('não é primo');
        return false;
      }
}

function item04(segundos) {
    let contaHoras = 0;
    let contaMinutos = 0;
    

    while(segundos >= 3600) {
        segundos -= 3600;
        contaHoras++;
    }

    while(segundos >= 60) {
        segundos -= 60;
        contaMinutos++;
    }
    console.log(`${contaHoras}:${contaMinutos}:${segundos}`)
}

function item05(num) {
    let soma = 0;

    for (i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
        soma += i;
        }
    }
    if (soma === num) {
        return true;
    } else {
        return false;
    }
}



function acessoAoSite(){
    alert('Bem vindo ao site');
}
acessoAoSite();

function mostrarMensagem(){
    const aplicacao = 'Teste 01';
    console.log(`Acesso à aplicação ${aplicacao}`);
    alert(`Bem-vindo à ${aplicacao}`);
}

mostrarMensagem();

function mostrarDobro(num) {
    console.log(`O dobro do número ${num} é ${num * 2}`);
}

function calcularMedia (nota1, nota2, nota3, nome) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('O valor digitado não é um número');
    } else {
        const media = (nota1 + nota2 + nota3) / 3;
        alert(`${nome}, a sua média de notas é: ${media.toFixed(2)}`);
        console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`)
    }
}