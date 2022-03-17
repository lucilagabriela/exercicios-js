const botaoIMC = document.getElementById('buttonIMC');

function calcular() {
    const nome = document.getElementById('name').value;
    const altura = document.querySelector('p#altura').value;
    const peso = document.querySelector('p#peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso/(altura*altura));
        resultado.textContent = `${nome}, ${valorIMC}`;
    } else {
        alert('preencha todos os dados!');
    }

}
