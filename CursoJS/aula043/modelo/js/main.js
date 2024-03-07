const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar =
iniciar.addEventListener('click', function(event) {

    relogio.innerHTML = setInterval(function(){return console.log(mostraHora());}, 1000);

})

pausar.addEventListener('click', function(event){

})

zerar.addEventListener('click', function(event){
    
})

