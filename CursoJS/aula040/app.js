// Devemos receber um numero ou valor
// Devemos identificar se realmente o numero é um numero e em caso seja confirmado, devemos retornar esse valor.
// Devemos identificar se esse numero é de 0 a 100, se for false, devemos falar para para de executar o código e seguir novamente para inserir o numero correto.
// Depois, devemos realizar as condicionais

function recebeNumber(numero){

    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero

}

for (let i = 0; i < 100; i++){
  console.log(i, recebeNumber(i))
}





















// function meuEscopo(numeroDado) {

//   if (numeroDado >= 0 && numeroDado <= 100) {
//     console.log("Numero Valido")
//     // Novo fluxo

//     if (numeroDado % 3 == 0 && numeroDado % 5 == 0 ) {
//       console.log("FizzBuzz")
//     } else if (numeroDado % 3 == 0) {
//       console.log("Fizz")
//     } else if (numeroDado % 5 == 0) {
//       console.log("Buzz")
//     } else {
//       console.log(`Não é divisel por nenhum numero, então retornamos ele mesmo: ${numeroDado}`)
//     }

//   } else {
//     console.log("Digite um numero valido de 0 a 100")
//   }

// }

// console.log(meuEscopo(Number(prompt("Digite um numero"))));