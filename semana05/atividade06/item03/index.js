let i = Number(prompt('Digite o primeiro valor da contagem: '));
let limite = Number(prompt('Digite o segundo valor da contagem: '));

if (isNaN(i) || isNaN(limite)) {
    console.log('Erro, você só pode digitar número!');
    
} else if(limite == i) {
    console.log('Primeiro valor não pode ser igual ao segundo valor');
} else if (limite < i) {
    let decremento = Number(prompt('Digite o decremento: '));
    if (decremento >= i) {
        console.log('Decremento deve ser menor que valor inicial');
    } else {
        while(i >= limite) {
            console.log(i);
            i = i - decremento;
        }
    }
    
} else {
    let incremento = Number(prompt('Digite o incremento: '));
    if (incremento >= limite) {
        console.log('Incremento deve ser menor que valor final');
    } else {
        while(i <= limite) {
            console.log(i);
            i = i + incremento;
        }
    }
    
}

