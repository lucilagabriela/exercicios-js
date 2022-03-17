const botaoIMC = document.getElementById('buttonIMC');

function calcular() {
    const name = document.getElementById('name').value;
    const altura = document.querySelector('p#altura').value;
    const peso = document.querySelector('p#peso').value;
    const resultado = document.getElementById('resultado');

    if (name !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso/(altura*altura));
        resultado.textContent = `${name}, ${valorIMC}`;
    } else {
        alert('preencha todos os dados!');
    }

}
