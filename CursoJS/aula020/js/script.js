function meuEscopo(){
    const form = document.querySelector('.form'); // Estou acessando os elementos que estão na minha tag form, a partir desse comando, posso modificar qualquer coisa dentro da minha tag form.

    function recebeEventoForm(evento){
        evento.preventDefalt();// Nessa linha, estou dizendo que o computador ira prevenir o evento que aconteceria quando o usuario enviar o o formulário.

        const nome = form.querySelector('.nome'); // Estou acessando a minha class nome....
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome, peso, altura);
    }

    form.addEventListener('submit', recebeEventoForm);//Neste caso, quando o usuário, cliclar no meu button, submit, era será executado a minha função evento.preventDefalt, no qual não vai realizar a função automatica do navegador.
}

meuEscopo();

// Objetivo:

// 