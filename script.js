const calculatorButton = document.getElementById('calculator_button');
const results = document.querySelector('.results');
const warning = document.querySelector ('.warning');
const healthWarning = document.querySelector ('.health_warning');
const wantHide = document.querySelector ('.results_sheet');

calculatorButton.onclick = calcularIMC;
const botao = document.getElementById('botao');
const resultado = document.querySelector('.results');

botao.onclick = calcularIMC;

function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = 0;

    imc = peso / (altura ** 2);

    if (isNaN(imc)) {
        wantHide.style.display = 'none';
        return;
    }

    wantHide.classList.remove('yellow', 'red', 'orange', 'green');

    if (imc <= 18) {
        results.textContent = imc.toFixed(2);
        warning.textContent = 'Cuidado! você está abaixo do peso!';
        healthWarning.textContent = 'Riscos á saúde: Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais.';
        wantHide.classList.add('orange');
    } else if (imc > 18 && imc < 25) {
        results.textContent = imc.toFixed(2);
        warning.textContent = 'Você está no peso Ideal!';
        healthWarning.textContent = 'Riscos á saúde - Estado normal, bom nível de energia, vitalidade e boa condição física. Mantenha o seu peso e IMC.';
        wantHide.classList.add('green');
    } else if (imc >= 25 && imc < 30) {
        results.textContent = imc.toFixed(2);
        warning.textContent = 'Cuidado! Você está com sobrepeso!';
        healthWarning.textContent = 'Risco moderado - Fadiga, problemas digestivos, problemas circulatórios, má circulação nas pernas, varizes.';
        wantHide.classList.add('light_orange');
    } else if (imc >= 30 && imc < 35) {
        results.textContent = imc.toFixed(2);
        warning.textContent = 'Cuidado! Você está com obesidade moderada!';
        healthWarning.textContent = 'Risco alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, disfunções sexuais.';
        wantHide.classList.add('orange');
    } else if (imc >= 35) {
        results.textContent = imc.toFixed(2);
        warning.textContent = 'Cuidado! Você está com obesidade morbida!';
        healthWarning.textContent = 'Risco Muito alto - Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual.';
        wantHide.classList.add('red_orange');
    }

    wantHide.style.display = 'block';
    resultado.textContent = imc.toFixed(2);
}