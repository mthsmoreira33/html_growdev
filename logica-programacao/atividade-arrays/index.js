item01([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
function item01(lista) {
    console.log('Item 01')
    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            console.log(lista[i]);
        }
    }
}

function item02(lista) {
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

item04([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],[10, 20, 30, 40, 50, 60, 70, 80, 90])

function item04(lista1, lista2) {
    let listaFinal = lista1.concat(lista2)
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

item06(['Matheus', 'Moreira', 'Lima', 'Alessandra', 'Vieira'])
function item06(nomes){
    console.log(nomes.reverse());
}


