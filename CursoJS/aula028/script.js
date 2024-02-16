// Aula sobre datas
// Como efetuar algum calculo com data:
//        (segundos) * (segundos) * (horas) * (milesimos - padrao)
const tresHoras = 60 * 60 * 3 * 1000;
const addDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + tresHoras + addDia); // Se não colocarmos nenhum parametro dentro do nosso Date, ele ira nos mostrar a data atual, porém se colocarmos o numero 0, vai pegar o ponto inicial do mesmo que a contagem ira começar em 1970;
console.log(data.toString());