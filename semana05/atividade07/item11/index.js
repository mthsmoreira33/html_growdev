const turno = prompt('Qual é o seu turno? Digite: \n [M] para matutino, [V] para vespertino e [N] para noturno');

switch(turno) {
    case 'M':
        console.log('Bom dia!');
        break;
    case 'V':
        console.log('Boa tarde!');
        break;
    case 'N':
        console.log('Boa noite!');
        break;
        
    default:
        console.log('Opção inválida');
        break;
}