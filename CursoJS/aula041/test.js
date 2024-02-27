function soma(x, y) {

    if (typeof x !== 'number' && typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    } // Através do throw, conseguimos definir uma mensagem, no qual ira ser gerada o erro.

    return x + y;
}

try {
    // Computar, execute esses comandobs e verifique se houve algum erro.
    console.log(soma(5, 7));
    console.log(soma(a, 2))
    // Caso houver algum erro, armazene o mesmo na minha varialvel "e" dentro do meu chat, e exiba a mensagem ou o erro se eu colocar no console.log dentro do catch.
} catch (e) {
    console.log(e)
}
