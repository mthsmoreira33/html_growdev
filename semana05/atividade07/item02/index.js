const idade = Number(prompt('Digite a sua idade: '));


if (idade >= 18) {
    const temHabilitacao = confirm('Prossiga somente se tiver habilitação');
    if (temHabilitacao) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir');
    }
} else {
    console.log('Não pode dirigir');
}