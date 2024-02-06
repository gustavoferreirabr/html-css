const nome = 'Gustavo';
const sobrenome = 'Ferreira';
const idade = 30;
const peso = 84;
const alturaEmMetro = 1.80;
const anoAtual = 2024;
let imc;
let anoDeNascimento;

// Calculo do IMC 
imc = peso / (alturaEmMetro * alturaEmMetro);
console.log('Peso IMC: ', imc)

// Calculo do ano de nascimento
anoDeNascimento = (anoAtual - idade);
console.log(`Ano de nascimento: ${anoDeNascimento}`)