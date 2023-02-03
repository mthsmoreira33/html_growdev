function item01() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            console.log(lista[i]);
        }
    }
}

function item02() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let soma = 0;

    for (i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    console.log(soma);
}

function item03() {
    let lista = [];

    for (i = 1; lista.length < 4; i++) {
        let somaDivisores = 0;
        for (contador = 1; contador < i; contador++) {
            if (i % contador === 0) {
             somaDivisores += contador;
            }
        }
        if (somaDivisores === i) {
            lista.push(i);
        }
    }
    console.log(lista);   
}



function item04(lista1, lista2) {
    let listaFinal = [lista1 +"," + lista2];
    listaFinal.toLocaleString();
    console.log(listaFinal);
}

function item05(lista, num) {
    for (i = 0; i < lista.length; i++){
        if (lista[i] !== num){
            continue;
        } else {
            break;
        }
    }
    if (lista[i] === num) {
        return true;
    } else {
        return false;
    }
}

function item06(nomes){
    console.log(nomes);
    const nomesInvertido = [];

    for (i = 1; i <= nomes.length; i++){
        //Adiciona o último elemento da lista nomes na lista nomesInvertido
        nomesInvertido.push(nomes[nomes.length - i]);
    }
    console.log(nomesInvertido);
}


