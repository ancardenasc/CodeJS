function precioCompleto(precio, impuesto){
  return precio + (precio * impuesto);
}
let resultado = precioCompleto(19.90, 0.13);
console.log(resultado);