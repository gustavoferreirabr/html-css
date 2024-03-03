const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')

function mostraHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
       
    });

}

iniciar.addEventListener('click', function(event) {
    
    const cronometro = setInterval(function(){
        return console.log(mostraHora());
    }, 1000)

    relogio.innerHTML = cronometro;

})

pausar.addEventListener('click', function(event){

})

zerar.addEventListener('click', function(event){
    
})

