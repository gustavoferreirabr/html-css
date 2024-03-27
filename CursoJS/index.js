const canal_1 = 1
const canal_2 = 2
const canal_3 = 3
const canal_4 = 4

let canal_digitado_usuario = Number(prompt("Digite um numero de canal"));

if(canal_digitado_usuario == canal_1){
    console.log("Futebol");
} else if(canal_digitado_usuario == canal_2){
    console.log("Jornal")
} else if(canal_digitado_usuario == canal_3){
    console.log("Politica")
} else if(canal_digitado_usuario == canal_4){
    console.log("Desenho")
} else{
    console.log("O canal digitado não está disponível")
}