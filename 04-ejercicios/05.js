let array = [2, 5, 7, 15, -5, -100, 55];

function getMayorMenor(arr){
  let mayor = arr[0];
  let menor = arr[0];
  for(let numero of arr){
    menor = menor < numero ?  menor : numero;
    mayor = mayor > numero ?  mayor : numero;
  }
  return [mayor, menor];
}

let numeros = getMayorMenor(array);
console.log(numeros);