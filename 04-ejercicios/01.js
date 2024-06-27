function cualEsMayor (a,b){
  // if (a<b){
  //   return b;
  // }
  // else{
  //   return a;
  // }
  return(a < b) ? b : a; //ternario
}

let mayor = cualEsMayor(100,80);

console.log(mayor);

