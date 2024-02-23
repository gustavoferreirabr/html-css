const elementos = [
    {tag: 'p', texto:'Olá mundo - Frase 1'},
    {tag: 'div', texto:'Olá Gustavo - Frase 2'},
    {tag: 'section', texto:'Olá cidade - Frase 3'},
    {tag: 'footer', texto:'Ola gente! - Frase 4'}
]

const container = document.querySelector('container');
let div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){

    console.log(`Elemento ${i}`)

}