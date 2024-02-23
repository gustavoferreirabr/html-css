let msg = document.querySelector('.paragrafo');
msg.innerHTML = '';

for(let i = 1; i <= 4; i++){
    msg.innerHTML += `Frase ${i} <br>`;
}