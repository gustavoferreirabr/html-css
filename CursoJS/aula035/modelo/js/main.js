const elementos = [
    {tag: 'p', texto:'Olá mundo - Frase 1'},
    {tag: 'div', texto:'Olá Gustavo - Frase 2'},
    {tag: 'section', texto:'Olá cidade - Frase 3'},
    {tag: 'footer', texto:'Ola gente! - Frase 4'}
]

const container = document.querySelector('container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){

    // Iniciação no indice 0
    // Igual a: tag: 'p', texto:'Olá mundo - Frase 1'
    let {tag, texto} = elementos[i]; 
    let criarTag = document.createElement(tag);
    let criarTexto = document.createTextNode(texto)
    
    criarTag.appendChild(criarTexto);
    div.appendChild(criarTag);
}

container.appendChild(div);