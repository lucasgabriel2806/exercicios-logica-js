/** 
 * Inverter uma string
   Peça ao usuário uma palavra e imprima essa palavra invertida.

   📌 Exemplo:

   Entrada: "JavaScript"
   Saída: "tpircSavaJ"
   📌 Dica: Use split(), reverse() e join().
 */

/** Variaveis */
let palavra, palavraInvertida = [];

/** Entrada de dados */
palavra = prompt("Digite uma palavra: ");

/** Processamento */
/** Transforma cada letra da palavra em um array */
palavraInvertida = palavra.split("");

/** Inverte os elementos do array */
palavraInvertida.reverse();

/** Junta os elementos de modo que forme a palavra completa */
palavraInvertida = palavraInvertida.join("");
alert(palavraInvertida);