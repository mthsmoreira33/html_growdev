let a = 30, b = 3, c = 4;

if (a < b + c && b < a + c && c < a + b) {
    if (a == b || b == c || c == a) {
        console.log('Triangulo isóceles');
    } else if (a != b && b != c && a != c) {
        console.log('Triangulo escaleno');
    } else if (a == b && b == c && c == a) {
        console.log('Triangulo equilátero');
    }
} else {
    console.log('Não é um triangulo')
}