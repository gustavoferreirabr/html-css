function meuEscopo() {
    const form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');  
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        criarObj(nome.value, sobrenome.value, peso.value, altura.value);

        function criarObj(nome, sobrenome, peso, altura){
            pessoas.push = {nome, sobrenome, peso, altura}
            console.log(pessoas);
        }

        resultado.innerHTML = 
        `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

// Objetivo:

// pegar o valor dos inputs, criar objetos e coloar os objetos dentro do arrya

// 