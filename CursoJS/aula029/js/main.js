// Devemos exibir por escrito o dia da semana, o dia do mês, o próprio mês e o ano e o horário.

// Primeiro, devemos exibir o dia da semana.

let data = new Date();
const diaSemana = data.getDay();
console.log(diaSemana)

const diaSemanaTexto = localizadorDiaSemana(diaSemana);
function localizadorDiaSemana(diaSemana) {

    let diaSemanaText;

    switch (diaSemana) {
        case 0:
            diaSemanaText = "Domingo";
            break;

        case 1:
            diaSemanaText = "Segunda";
            break;

        case 2:
            diaSemanaText = "Terça";
            break;

        case 3:
            diaSemanaText = "Quarta";
            break;
        case 4:
            diaSemanaText = "Quinta";
            break;

        case 5:
            diaSemanaText = "Sexta";
            break;

        case 6:
            diaSemanaText = "Sabado";
            break;

        default:
            diaSemanaText = "Não foi encontrado o dia da semana";
            break;
    }

    return diaSemanaText;

}

console.log(diaSemanaTexto)