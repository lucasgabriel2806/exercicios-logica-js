/**
 * Ordenar um array de números
 * Dado um array, ordene os números em ordem
 * crescente.
 */

/** Variaveis */
const numeros = [2, 3, 1, 5, 4, 200, 45];

// numeros.sort();

alert(numeros.sort(function(a, b){return a - b}));