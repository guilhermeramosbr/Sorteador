function sortear() {
    const input1 = parseInt(document.querySelector('#input1').value);
    const input2 = parseInt(document.querySelector('#input2').value);
    const resultado = document.querySelector('#p_resultado');

    if (isNaN(input1) || isNaN(input2) || input1 > input2) {
        resultado.textContent = "Por favor, insira valores válidos!";
        return;
    }

    let numero = Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
    resultado.textContent = `Número sorteado: ${numero}`;
    
}