const botao = document.getElementById('botao');
const resultado = document.querySelector('.results');

botao.onclick = calcularIMC;

function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = 0;

    imc = peso / (altura ** 2);

    resultado.textContent = imc.toFixed(2);
}