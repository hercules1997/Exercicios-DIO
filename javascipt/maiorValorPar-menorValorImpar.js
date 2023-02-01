// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
//! - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//! - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
const { gets, print } = require("./funcao-auxiliar-ex2");

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}
print("Maior número par:", maiorNumeroPar);
print("Menor número impar:", menorNumeroImpar);
