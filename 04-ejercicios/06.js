let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let numPositivos = 0;
  for(numero of arr){
    if(numero >= 0){
      numPositivos++;
    }
  }
  return numPositivos;
}

let numeros = cuantosPositivos(array);
console.log(numeros);