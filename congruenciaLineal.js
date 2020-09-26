function generarRandom(iteraciones, x,a,c,m){
  for(let i = 0; i<iteraciones;i++){
    x = congruenciaLineal(x,a,c,m);
    console.log(x);
  }
}

function congruenciaLineal(x, a, c, m){
  const temp = a*x+c;
  return temp % m;
}

generarRandom(15,7,1,7,13);