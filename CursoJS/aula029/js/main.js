// Devemos exibir por escrito o dia da semana, o dia do mês, o próprio mês e o ano e o horário.

// Primeiro, devemos exibir o dia da semana.

let data =  new Date();
const diaSemana = data.getDay();
console.log(diaSemana)

const diaSemanaTexto = localizadorDiaSemana(diaSemana);
function localizadorDiaSemana(diaSemana){

    let diaSemanaTxt;

    if(diaSemana === 0){
       diaSemanaTxt = "Domingo";
    } else if(diaSemana === 6){
       diaSemanaTxt = "Sabado";
    }

    return diaSemanaTxt;

}

console.log(diaSemanaTexto)