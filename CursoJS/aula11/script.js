let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varGeral = '';

varGeral = varB;
varA = varGeral;
console.log(varA)

varGeral = varC
varB = varGeral;
console.log(varB);

varGeral = varA;
varC = varGeral;
console.log(varC)