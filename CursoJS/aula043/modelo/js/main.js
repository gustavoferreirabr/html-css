const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')

function mostraHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

iniciar.addEventListener('click', function(event) {
    
    const cronometro = setInterval(mostraHora(), 1000);
    console.log(cronometro);
})

pausar.addEventListener('click', function(event){

})

zerar.addEventListener('click', function(event){
    
})

