function generarRandom(iteraciones, x,a,m){
  for(let i = 0; i<iteraciones;i++){
    x = congruencialmultiplicativo(x,a,m);
    console.log(x);
  }
}

function congruencialmultiplicativo(x, a, m){
  const temp = a*x;
  return temp % m;
}

generarRandom(10,5,5,32);