function mostraHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const cronometro = setInterval(function(){
    console.log(mostraHora());
}, 1000)


const duracao = setTimeout(function(){
    clearInterval(cronometro);
}, 10000)

const mensagemAgendada = setTimeout(function(){
    console.log("Olá, descreva sua solicitação:")
}, 15000)