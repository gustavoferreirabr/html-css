let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Primeira opção:

const varX = varA;
console.log(varX)

varA = varB
console.log(varA);

varB = varC;
console.log(varB);

varC = varX;
console.log(varC);

