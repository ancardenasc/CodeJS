function getbyIx(arr, idx){
  if(idx < 0 || arr.lenght <= idx){
    return 'Dont exist element';
  }
  else
  return arr[idx];
}

let resultado = getbyIx([1,2,6], 2);

console.log(resultado);