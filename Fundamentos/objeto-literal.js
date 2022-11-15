let personaje = {
    nombre:'Tony Stark',
    codeName: 'Iron Man',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-117
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    dirección:{
        zip: '1080,9025',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
}; //{} objeto literal, name llave / Jeiller Valor


console.log(personaje); // Impresión alfabetícamente
console.log('Nombre', personaje.nombre);

//Acceder a las propiedades

console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje['edad']);
console.log('Lat', personaje.coords.lat);
console.log('Nro trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);


const x  = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-pelicula"]);