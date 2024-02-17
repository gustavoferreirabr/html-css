// Exibir: (dia da semana), o (dia do mes) de (mês) de (ano), (horário:)


let data = new Date('2003-05-13 03:05:44');
console.log(data)
console.log("Dia", data.getDate()); // Dia
console.log("Mês", data.getMonth() + 1); // Mês - Inidice começa 0
console.log("Ano", data.getFullYear());
console.log("Horas", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Dia da semana", data.getDay()); // o domingo começa em 0 e o sabado vai até 6
