//    indice:   0   1  2  3
const numeros = [100, 200, 300, 400, 500] // Esse comando (...resto), significa que ele ira pegar o resto dos elementos/indices que estão dentro da minha array.
const [primeiroIndice, segundoIndice, ...resto] = numeros; // Isso daqui apenas funciona com números, foi feito o teste.

console.log(primeiroIndice, segundoIndice);
console.log(resto)

// Além disso, conseguimos pular elemento/indices, usando um espaço entre virgulas.

const [primeiro, ,terceiro, ,quinto] = numeros;
console.log(primeiro, terceiro, quinto);

// Como podemos acessar indices dentro de indices

const listas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] 

console.log(listas[1][1]);// Estou acessando o indice 1 da minha array listas, e dentro dela estou acessando o indice 1 que é o 5

