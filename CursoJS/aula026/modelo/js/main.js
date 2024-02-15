function meuEscopo(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', recebeEventoForm);


    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('#peso');
        let altura = form.querySelector("#altura");
        altura = parseFloat(altura.value);
        peso = parseFloat(peso.value);
        console.log(`${peso}, ${altura}`)

        // function calculoIMC(altura, peso){

        //     const calculo = ((altura ));
        //     return calculo;

        // }

        // const nome = form.querySelector('.nome');

        // criarObj(nome.value, sobrenome.value, peso.value, altura.value);

        // function criarObj(nome, sobrenome, peso, altura){
        //     pessoas.push = {nome, sobrenome, peso, altura}
        //     console.log(pessoas);
        // }
    }
    
}
meuEscopo();

 // FEITO = Primeiro, devemos bloquear o evento do formulário, visto que se deixarmos o formulário agir da forma que o mesmo age, não iremos conseguir obter o resultado. 

// FEITO = Segundo, devemos obter os dados que serão preenchidos no nossos inputs altura e largura.

    // Terceiro, devemos efetuar a divisão entre altura e input.

    // Quarto, após realizar o calculo, devemos comparar o resultado com os indices e determina em condições se o usuario está acima ou abaixo do peso

    // Depois disso, devemos exibir se o usuario está acima ou abaixo do peso. exibir embaixo do button, através do document.