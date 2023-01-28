const numero = Number(prompt('Digite um número de 1 a 7'));

switch (numero) {
    case 1:
      dia = "Domingo";
      break;
    case 2:
      dia = "Segunda-feira";
      break;
    case 3:
       dia = "Terça-feira";
      break;
    case 4:
      dia = "Quarta-feira";
      break;
    case 5:
      dia = "Quinta-feira";
      break;
    case 6:
      dia = "Sexta-feira";
      break;
    case 7:
      dia = "Sábado";
      break;

    default:
        dia = 'Dia Inválido'
        break;
}

console.log(dia)