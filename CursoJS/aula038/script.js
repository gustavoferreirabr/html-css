function meuEscopo(){

    const valorA = Number(prompt("Digite um numero"));
    const valorB = Number(prompt("Digite um novo numero"));
    console.log(valorA, valorB)

    maiorNumber(valorA, valorB)

    function maiorNumber(valorA, valorB){

        if(valorA > valorB){
            console.log(`O valor A (${valorA}) é maior`)
        } else{
            console.log(`O valor B (${valorB}) é maior`)
        }
    }
}

meuEscopo();