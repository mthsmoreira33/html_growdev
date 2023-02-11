const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

const index = salarios.findIndex(salario => salario > 7500.00);

/* function (salario){
    return salario > 7500.00;
} */

console.log(index);

//Adicional 01
const lista = [1, 40, 2, 10];
console.log(lista.sort());

console.log(salarios.sort(function(a, b){return a-b}));

console.log(salarios.sort(function(a,b){return b-a}));

console.log(salarios.some(salario => salario > 10000));

console.log(salarios.filter(salario => salario > 8000));

//Adicional 02
const listaElementos = ['terra', 'fogo', 'ar', 'água'];
console.log(listaElementos.filter(elemento => elemento.length === 4));

const rainbow = ['Vermelho', 'Laranja', 'Preto', 'Azul'];
rainbow.splice(2, 1, 'Amarelo', 'Verde');
console.log(rainbow);

rainbow.splice(rainbow.length, 0, 'Roxo');
console.log(rainbow);