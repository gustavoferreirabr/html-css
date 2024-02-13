function meuEscopo() {
    const form = document.querySelector('.form'); // Estou acessando os elementos que estão na minha tag form, a partir desse comando, posso modificar qualquer coisa dentro da minha tag form.
    let resultado = document.querySelector('.resultado'); // 
    const pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefalt();// Nessa linha, estou dizendo que o computador ira prevenir o evento que aconteceria quando o usuario enviar o o formulário.

        const nome = form.querySelector('.nome'); // Estou acessando a minha class nome que está dentro do meu documento form.query.
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        criarObj(nome.value, sobrenome.value, peso.value, altura.value);

        function criarObj(nome, sobrenome, peso, altura){
            return {
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            };

        console.log(criarObj);
       
        }

        resultado.innerHTML = 
        `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`
    }

    form.addEventListener('Submit', recebeEventoForm);//Neste caso, quando o usuário, cliclar no meu button, submit, era será executado a minha função evento.preventDefalt, no qual não vai realizar a função automatica do navegador.
}

meuEscopo();

// Objetivo:

// pegar o valor dos inputs, criar objetos e coloar os objetos dentro do arrya

// 