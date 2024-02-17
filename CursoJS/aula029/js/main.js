// Devemos exibir por escrito o dia da semana, o dia do mês, o próprio mês e o ano e o horário.
let output = document.querySelector('.output');
// Primeiro, devemos exibir o dia da semana.

// let data = new Date();
// const diaSemana = data.getDay();
// const diaMes = data.getDate();
// const mesNumber = data.getMonth() + 1;
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minutos = data.getMinutes();
// // console.log(minutos);

// const diaSemanaTexto = localizadorDiaSemana(diaSemana);
// function localizadorDiaSemana(diaSemana) {

//     let diaSemanaText;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaText = "domingo";
//             break;

//         case 1:
//             diaSemanaText = "segunda-feira";
//             break;

//         case 2:
//             diaSemanaText = "terça-feira";
//             break;

//         case 3:
//             diaSemanaText = "quarta-feira";
//             break;
//         case 4:
//             diaSemanaText = "quinta-feira";
//             break;

//         case 5:
//             diaSemanaText = "sexta-feira";
//             break;

//         case 6:
//             diaSemanaText = "sabado";
//             break;

//         default:
//             diaSemanaText = "Não foi encontrado o dia da semana";
//             break;
//     }
//     return diaSemanaText;
// }

// const mesTexto = localizadorMes(mesNumber);
// function localizadorMes(mesNumber) {

//     let mesPorEscrito;

//     switch (mesNumber) {
//         case 1:
//             mesPorEscrito = "Janeiro";
//             break;

//         case 2:
//             mesPorEscrito = "Fevereiro";
//             break;

//         case 3:
//             mesPorEscrito = "Março";
//             break;

//         case 4:
//             mesPorEscrito = "Abril";
//             break;

//         case 5:
//             mesPorEscrito = "Maio";
//             break;

//         case 6:
//             mesPorEscrito = "Junho";
//             break;

//         case 7:
//             mesPorEscrito = "Julho";
//             break;

//         case 8:
//             mesPorEscrito = "Agosto";
//             break;

//         case 9:
//             mesPorEscrito = "Setembro";
//             break;

//         case 10:
//             mesPorEscrito = "Outubro";
//             break;

//         case 11:
//             mesPorEscrito = "Novembro";
//             break;

//         case 12:
//             mesPorEscrito = "Dezembro";
//             break;

//         default:
//             mesPorEscrito = '';
//             break;
//     }

//     return mesPorEscrito;
// }

// output.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano}, ${hora}:${minutos}`


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })