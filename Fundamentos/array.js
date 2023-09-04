// poco común
// const arr = new Array (10);
// común
// const arr = [];
// console.log(arr);

let videojuegos = ['Super Mario 94', 'Megaman', 'God of war 1-4', 'Halo 1-6'];
console.log({ videojuegos });
console.log(videojuegos[0]);



let arregloCosas = [
    true,
    123,
    'Jeiller',
    1 + 2,
    function(){}, //Función tradicional
    ()=>{}, //Función de flecha
    {a:1}, //Objeto literal
    ['Kratos','Megaman','Doom','Master chief',
    ['Lara Croft', 'Sonic']]
];

console.log(arregloCosas);
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
// ver el valor de un array dentro de un array
console.log(arregloCosas[7][3]); //
// ver el valor de un array dentro de un array, que está en otro array
console.log(arregloCosas[7][4][0]);
