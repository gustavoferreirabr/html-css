// Devemos receber um numero ou valor
// Devemos identificar se realmente o numero é um numero e em caso seja confirmado, devemos retornar esse valor.
// Devemos identificar se esse numero é de 0 a 100, se for false, devemos falar para para de executar o código e seguir novamente para inserir o numero correto.
// Depois, devemos realizar as condicionais

function meuEscopo(numeroDado){

   if (numeroDado >= 0 && numeroDado <= 100){
     console.log("Numero Valido") 

   } else console.log("Digite um numero valido de 0 a 100")

}

console.log(meuEscopo(Number(prompt("Digite um numero"))));