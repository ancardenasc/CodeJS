/**
 * Son tipo de datos de referencia, son una agrupación de datos
 */


//Pesonaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);
console.log(personaje['edad']);

personaje.edad= 33;

let llave = 'anime';
personaje[llave]='naruto';

delete personaje['edad'];

console.log(personaje);