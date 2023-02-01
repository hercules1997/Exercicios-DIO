// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const { gets, print } = require("./funcao-auxiliar-ex1");

let media = gets();

if (media < 5) {
  print("REP");
}
if (media > 7) {
  print("APR");
}
if (media >= 5 && media < 7) {
  print("REC");
}
console.log(gets(media));
