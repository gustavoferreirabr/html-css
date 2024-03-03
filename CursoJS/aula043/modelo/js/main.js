const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')

function mostraHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
       
    });

}

