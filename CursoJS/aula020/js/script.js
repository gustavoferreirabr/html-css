function meuEscopo(){
    const form = document.querySelector('.form'); // Estou acessando no meu documento a minha tag form, a partir desse comando, posso modificar qualquer coisa dentro da minha tag form.

    function recebeEventoForm(evento){
        evento.preventDefalt();

        const nome = form.querySelector('.nome'); // Estou acessando a minha class nome....
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome, sobrenome, peso, altura);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();