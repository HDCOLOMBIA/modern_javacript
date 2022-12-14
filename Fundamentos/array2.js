// Largo del array
let juegos = ['Halo', 'Tomb Raider', 'God of war', 'Left4Dead'];
// console.log('Largo: ', juegos.length);

// let primero = juegos[0];
// let ultimo = juegos[3];
// console.log(primero,ultimo);

// Operaciones
// let primero = juegos[2 -2];
// let ultimo = juegos[juegos.length - 1];
// console.log(primero,ultimo);

//intruccion foreach
// juegos.forEach((elemento, indice, arr) => {
//     console.log({elemento, indice, arr});
// });

//insertar elementos al final
// let nuevaLongitud = juegos.push('Metroid');
// console.log(nuevaLongitud, juegos);

//Agregar elemento al inicio
// nuevaLongitud = juegos.unshift('Final Fantasy');
// console.log(nuevaLongitud, juegos);

//borrar el último elemento
// let juegoBorrado = juegos.pop();
// console.log({juegoBorrado, juegos});

//Borrar elemento en posicion especifica
// let posicion = 1;
// juegos.splice(posicion, 1);

// let juegosBorrados = juegos.splice(posicion,2);
// console.log({juegosBorrados, juegos});

// Buscar la posición de un elemento #-1 es que no se encuentra el elemento, tambíen es Case Sensitive
// let metroIndex = juegos.indexOf('Left4Dead');
// console.log({metroIndex});


//  /**get Array[@@species]**/

console.log(Array[Symbol.species]);
class MyArray extends Array {
    // Overwrite MyArray species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}
console.log(MyArray);

// ejemplo 2
class Array1 extends Array {
    static get [Symbol.species]() { return Array; }
}

const a = new Array1(1, 2, 3);
const mapped = a.map(x => x * x);

console.log(mapped instanceof Array1);
// expected output: false

console.log(mapped instanceof Array);
  // expected output: true


// TODO: Referencias