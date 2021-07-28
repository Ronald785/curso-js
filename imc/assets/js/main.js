function calcular() {
    let peso = document.querySelector('.peso');
    let altura = document.querySelector('.altura');
    const res = document.querySelector('#res');

    const form = document.querySelector('form');
                                    //e -> evento
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    })
    
    peso = Number(peso.value);
    altura = Number(altura.value);
    
    const imc = calcularImc(peso, altura);

    res.innerHTML = '';

    if (peso && altura) {
        mensagem(imc);
    } else {
        alert('Verifique os dados digitados!')
    }
}

function calcularImc(peso, altura) {
    const imc  = peso / (altura ** 2);
    return imc.toFixed(2);
}

function mensagem(imc) {
    const grau = [
        'abaixo do peso',
        'peso normal',
        'sobrepeso',
        'obesidade grau 1',
        'obesidade grau 2',
        'obesidade grau 3'
    ]

    if (imc <= 18.5) return res.innerHTML += `<p>IMC: ${imc}, ${grau[0]}!</p>`;
    if (imc < 24.9)  return res.innerHTML += `<p>IMC: ${imc}, ${grau[1]}!</p>`;
    if (imc <= 29.9) return res.innerHTML += `<p>IMC: ${imc}, ${grau[2]}!</p>`;
    if (imc <= 34.9) return res.innerHTML += `<p>IMC: ${imc}, ${grau[3]}!</p>`;
    if (imc <= 39.9) return res.innerHTML += `<p>IMC: ${imc}, ${grau[4]}!</p>`;
    if (imc > 40)    return res.innerHTML += `<p>IMC: ${imc}, ${grau[5]}!</p>`;
}
