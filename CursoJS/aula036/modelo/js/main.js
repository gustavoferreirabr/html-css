const paragrafos = document.querySelector('.paragrafos');
// Nesta situação, estamos informando que estou selecionando a minha class paragrafos, então estamos acessando todo elemento e código que estão dentro dessa class.
const ps = paragrafos.querySelectorAll('p');
// Aqui estamos dizendo o seguinte, estamos selecionando tomos os meus elementos <p> que estão dentro da minha div class = paragrafos.


const estilosBody = getComputedStyle(document.body);
// Nessa linha de código, criamos um variável estilosBody, no qual selecionamos getComputedStyle (o estilo) do nosso documento bory
const backgroundColorBody = estilosBody.backgroundColor;
// Após selecionarmos o estilo do nosso documento body, adicionamos uma variável, onde estamos informando que deste estilo selecionado, estamos selecionando o nosso background do nosso body, sendo assim iremos receber o valor desse body.
console.log(backgroundColorBody);


for (let p of ps){
    // Neste caso, estamos fazendo o seguinte: como esse for of, lê os valores dos nossos indice, então estamos dizendo que o nosso p = ao valor do nosso indice terá um background e um color.
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}

