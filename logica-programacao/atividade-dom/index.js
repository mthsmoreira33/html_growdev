function validarCheckBox() {
    const checkboxes = document.querySelectorAll('.area');
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
        return true;
        }
    }
    return false;
}

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    validarCheckBox();
    const dados = {
        nome: document.getElementById('nome').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cargo: document.querySelector('input[name="cargo"]:checked').value,
        area: document.querySelector('input[name="area"]:checked').value,
        miniCurriculo: document.getElementById('miniCurriculo').value
    }

    for (const [key, value] of Object.entries(dados)) {
        console.log(`${key}: ${value}`);
    }
});

document.getElementById('zerar').addEventListener('click', () => {
    document.getElementById('formulario').reset();
})


