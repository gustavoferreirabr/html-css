function mostraHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const cronometro = setInterval(function(){
    console.log(mostraHora());
}, 1000)