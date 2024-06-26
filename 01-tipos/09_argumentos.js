function suma(a, b){
  console.log (arguments);
  return a + 2 + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma)


/* Las funciones reciben suma(a) que el a son parametros, el valor que se le da en la funcion se llama argumentos suma(5) */
