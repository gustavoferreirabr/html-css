function meuEscopo(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', recebeEventoForm);
    let output = document.querySelector('.output');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('#peso');
        let altura = form.querySelector("#altura");
        altura = parseFloat(altura.value);
        peso = parseFloat(peso.value);
        console.log(`${peso}, ${altura}`)

        function calculoIMC(altura, peso){
            const calculo = ((peso / altura) / altura);
            return calculo;
        }

        const resultado = calculoIMC(altura, peso);        

        if(resultado < 18.5){
            output.innerHTML = `Abaixo do peso (IMC ${resultado})`;
        } else if (resultado >= 18.5 && resultado <= 24.9){
            output.innerHTML = `Peso normal (IMC ${resultado})`
        } else if (resultado >= 25 && resultado <= 29.9){
            output.innerHTML = `Sobrepeso (IMC ${resultado})`
        } else if (resultado >= 30 && resultado <= 34.9){
            output.innerHTML = `Obesidade grau 1 (IMC ${resultado})`
        } else if (resultado >= 35 && resultado <= 39.9){
            output.innerHTML = `Obesidade grau 2 (IMC ${resultado})`
        } else {
            output.innerHTML = `Obesidade grau 3 (IMC ${resultado})`
        }

    }
    
}
meuEscopo();