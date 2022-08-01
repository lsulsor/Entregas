/* Módulo 2 Lenguajes

Ejercicios entregables
 Array operations
Head

Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

*/
const array = [0, 1, 2, 3];
const head = ([first]) => first;

console.log('El primer elemento del array es: ' + head(array));

/**
 * Tail
 * Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 * 
 */



const tail = (_first, ...nums) => nums

console.log('Devuelve todos los elemento menos el primero: ' + tail(0, 1, 2, 3));