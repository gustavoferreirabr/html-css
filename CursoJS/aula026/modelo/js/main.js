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
        // Entre 18,5 e 24,9 = Peso normal
        // Entre 25 e 29,9 = Sobrepeso
        // Entre 30 e 34,9 = Obsidade grau 1
        // Entre 35 e 39,9 = Obesidade grau 2
        // Mais do que 40 = Obseidade grau 3
        

        if(resultado < 18.5){
            output.innerHTML = "Abaixo do peso";
        } else if (resultado >= 18.5 && resultado <= 24.9){
            output.innerHTML = "Peso normal"
        } else if (resultado >= 25 && resultado <= 29.9){
            output.innerHTML = "Sobrepeso"
        } else if (resultado >= 30 && resultado <= 34.9){
            output.innerHTML = "Obesidade grau 1"
        } else if (resultado >= 35 && resultado <= 39.9){
            output.innerHTML = "Obesidade grau 2"
        } else {
            output.innerHTML = "Obesidade grau 3"
        }

    }
    
}
meuEscopo();

// FEITO = Primeiro, devemos bloquear o evento do formulário, visto que se deixarmos o formulário agir da forma que o mesmo age, não iremos conseguir obter o resultado. 

// FEITO = Segundo, devemos obter os dados que serão preenchidos no nossos inputs altura e largura.

// FEITO Terceiro, devemos efetuar a divisão entre altura e input.

    // Quarto, após realizar o calculo, devemos comparar o resultado com os indices e determina em condições se o usuario está acima ou abaixo do peso

    // Depois disso, devemos exibir se o usuario está acima ou abaixo do peso. exibir embaixo do button, através do document.