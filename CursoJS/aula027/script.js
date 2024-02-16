// Como encurtar as nossas condições do código if else.
// Exemplo: Quero informar ao meu console que, se o usuario tiver mais de 999 pontos é um usuário vip.

const pontuacaoUsuario = 1099;
// var                        (     condição if else   )  ( positivo )   (    negativo    )
const validacaoNivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario não VIP';
console.log(validacaoNivelUsuario);