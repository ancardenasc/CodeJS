// short-circuit


//Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Nicolas';
let username = nombre || 'Anonimo';
console.log(username);
username = nombre && 'Anonimo';
console.log(username);


function fn1(){
  console.log('funcion1');
  return false;
}

function fn2(){
  console.log('funcion2');
  return true;
}

let x = fn1() || fn2();
console.log(x);