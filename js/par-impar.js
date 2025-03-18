/** 
 *  Par ou Ímpar
    Escreva um programa que receba um número e imprima se ele é par ou ímpar.

📌 Dica: Use o operador % (módulo) para verificar a divisibilidade por 2. 
*/

/** Variáveis */
let numero;

/** Entrada de dados */
numero = prompt("Digite um número: ");

/** Processamento e Saída de dados */
if (numero % 2 === 0) {
  alert("O número " + numero + " é par.");
} else {
  alert("O número " + numero + " é impar");
}