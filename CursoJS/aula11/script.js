let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Primeira opção:

const varX = varA;
// Usei uma const, porque a const não podemos mudar o seu valor, sendo assim, atribui o valor da variável varA na minha const, como não poderia ser alterado esse valor, ficou como fixo e defino que o valor de varX é igual a VarA = A
// console.log(varX)

varA = varB
console.log(varA);

varB = varC;
console.log(varB);

varC = varX;
console.log(varC);

