//    indice:   0   1  2  3
const numeros = [100, 200, 300, 400, 500] // Esse comando (...resto), significa que ele ira pegar o resto dos elementos/indices que estão dentro da minha array.
const [primeiroIndice, segundoIndice, ...resto] = numeros; // Isso daqui apenas funciona com números, foi feito o teste.

console.log(primeiroIndice, segundoIndice);
console.log(resto)

// Além disso, conseguimos pular elemento/indices, usando um espaço entre virgulas.

const [primeiro, ,terceiro, ,quinto] = numeros;
console.log(primeiro, terceiro, quinto);