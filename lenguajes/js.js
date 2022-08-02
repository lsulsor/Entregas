/* Módulo 2 Lenguajes

Ejercicios entregables
 Array operations
Head

Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

*/
const array = [0, 1, 2, 3];
const head = ([first]) => first;

console.log("El primer elemento del array es: " + head(array));

/**
 * Tail
 * Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 *
 */

const tail = (_first, ...nums) => nums;

console.log(
  "Devuelve todos los elemento menos el primero: " + tail(0, 1, 2, 3)
);

/**
 * Init
 * Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

const init = (nums) => {
  nums.pop();
  return console.log(`Devuelve todos los elementos menos el último: ${nums}`);
};

init(array);

/**
 * Last
 * Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */
const arrayLast = ["primer", "segundo", "último"];
const last = (nums) => nums.pop();

console.log("Devuelve el último elemento: " + last(arrayLast));

/**
 * Concat
 *
 * Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const arrayUno = ["a", "b", "c"];
const arrayDos = ["d", "e", "f"];

const concat = (a, b) => arrayUno.concat(arrayDos);

console.log(concat(arrayUno, arrayDos));

/**
 * Clone
 * Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:
 */
const original = {
  name: "Ana",
  surname: "Martín",
};

function clone(...original) {
  console.log(original);
}

clone(original);

/**
 * Merge
 * Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.
 */

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(...arr) {
  return arr.reduce((acc, val) => {
    return { ...val, ...acc };
  }, {});
}

console.log(merge(a, b));

/**
 * Read Books
 * 
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  let resultado = false;
  books.forEach((element) => {
    if (element.title == titleToSearch && element.isRead) {
      resultado = true;
    }
  });
  return resultado;
}

/* console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego")); 
console.log(isBookRead(books, "Los Pilares de la Tierra")); */

/**
 * Slot Machine
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.
 */

class Maquina {
  constructor() {
    this.contador = 0;
  }
  play() {
    if (Math.random() < 0.5 && Math.random() < 0.5 && Math.random() < 0.5) {
      console.log(`Congratulations!!!. You won ${this.contador} coins!`);
      this.contador = 0;
    } else {
      this.contador = this.contador + 1;
      console.log("Good luck next time!!");
    }

   
  }
 
}

const maquina1 = new Maquina();
maquina1.play();
maquina1.play();
maquina1.play();

