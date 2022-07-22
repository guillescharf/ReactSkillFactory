/*
    Practica de JS en el SkillFactory de React

    Vamos a explorar algunos de los metodos que tienen los arrays en JavaScrip:
    .pop()              .shift()            .reverse()
    .push()             .slice()            .unshift()
    .join()             .concat()           .length
    .sort()
*/

//Arrays utilizados para las pruebas

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
const arraySkillers = ["Emmanuel", "Diego", "Marina", "Georgina", "Mariano"];


//  .pop() -->> Cada vez que llamas el método pop(), este elimina un elemento del final de un arreglo
const popElement = arrayNumeros.pop();
console.warn("Metodo .pop()");
console.log("Elemento extraido: ", popElement);
console.log("Resultado del array", arrayNumeros);
console.log("------------------------------------");

//  .push() -->> El método push() añade un elemento  al final del arreglo
const pushElement = 11;
arrayNumeros.push(pushElement);
console.warn("Metodo .push()");
console.log("Elemento agregado: ", pushElement);
console.log("Resultado del array", arrayNumeros);
console.log("------------------------------------");

//  .join() -->> El método join() junta todos los elementos de un arreglo usando un separador  y regresa una cadena.
const joinElement = "<->";
resultadoJoin = arrayNumeros.join(joinElement);
console.warn("Metodo .join()");
console.log("Separador a usar: ", joinElement);
console.log("Resultado del array", arrayNumeros);
console.log("Resultado de salida: ", resultadoJoin);
console.log("------------------------------------");


//  .sort() -->> El método sort() convierte los tipos de elemento  en cadena y luego los arregla.
const sortElement = [4,6,2,3,9,7,1,14];
resultadoSort = sortElement.sort();
console.warn("Metodo .sort()");
console.log("Array original: ", sortElement);
console.log("Resultado del array", resultadoSort);
console.log("Esto es util para cadenas, pero para numeros hay que usar una funcion como paramentro...");
console.log("Para el fin deseado, deberiamos aplicar:<< sortElement.sort((a,b) => (a-b)) >> el resultado seria: ");
resultadoSortNum = sortElement.sort((a,b) => (a-b));
console.log(resultadoSortNum);
console.log("------------------------------------");

//  .shift() -->> Usa el método shift() para eliminar un elemento desde el principio del arreglo. 
console.warn("Metodo .shift()");
console.log("El array original: ", arrayNumeros);
const shiftElement = arrayNumeros.shift();
console.log("Elemento extraido: ", shiftElement);
console.log("Resultado del array", arrayNumeros);
console.log("------------------------------------");

//  .slice() -->> El método slice() crea una copia del arreglo original
const sliceElement = arrayNumeros.slice();
console.warn("Metodo .slice()");
console.log("El array original es: ", arrayNumeros);
console.log("El array copiado con slice() es: ", sliceElement);
console.log("------------------------------------");

//  .concat -->> El método concat() combina uno o más arreglos, no cambia los arreglos originales
console.warn("Metodo .concat()");
const concatElement = arrayNumeros.concat(arraySkillers);
console.log("El array 1 es: ", arrayNumeros);
console.log("El array 2 es: ", arraySkillers);
console.log("El array resultante de aplicar concat es: ", concatElement);
console.log("------------------------------------");

//  .reverse() -->> El método reverse() invierte el orden de los elementos
console.warn("Metodo .reverse()");
console.log("El arreglo original es: ", arrayNumeros);
arrayNumeros.reverse();
console.log("Luego de aplicar el metodo reverse, el array queda: ", arrayNumeros);
console.log("------------------------------------");


//  .unshift() -->> Usa el método unshift() para agregar un elemento al comienzo del arreglo. 
console.warn("Metodo .unshift()");
const unshiftElement = 45;
console.log("El array original: ", arrayNumeros);
console.log("Elemento a ingresar: ", unshiftElement);
arrayNumeros.unshift(unshiftElement);
console.log("Resultado del array", arrayNumeros);
console.log("------------------------------------");

//  .length -->> La propiedad length nos muestra la cantidad de elemntos que tiene un arreglo.
console.warn("Propiedad length");
console.log("el arreglo a analizar es: ", arraySkillers);
console.log("Y segun la propiedad length tiene ", arraySkillers.length, " elementos.");