const dados = {
    nome: 'Gustavo',
    sobrenome: 'Ferreira',
    idade: 20,
    endereco: {
        rua: 'Estr Das Hortências',
        cidade: 'Osasco'
    }
}

const {nome, sobrenome, ...resto} = dados;
console.log(nome, sobrenome, resto);


const {endereco: {rua, cidade}, endereco} = dados;
console.log(rua, cidade, endereco);