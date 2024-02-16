// Aula sobre datas
// a ordem dos meses começam com 0 = janeiro 2 = fevereiro
// Como efetuar algum calculo com data:
//        (segundos) * (segundos) * (horas) * (milesimos - padrao)
// const tresHoras = 60 * 60 * 3 * 1000;
// const addDia = 60 * 60 * 24 * 1000;

// const data = new Date(0 + tresHoras + addDia);  Se não colocarmos nenhum parametro dentro do nosso Date, ele ira nos mostrar a data atual, porém se colocarmos o numero 0, vai pegar o ponto inicial do mesmo que a contagem ira começar em 1970;

const data = new Date('2024-02-16 18:27:52.45');
console.log("Dia", data.getDate()); // Dia
console.log("Mês", data.getMonth() + 1); // Mês - Inidice começa 0
console.log("Ano", data.getFullYear());
console.log("Horas", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia da semana", data.getDay()); // o domingo começa em 0 e o sabado vai até 6
console.log(Date.now());

console.log(data.toString());