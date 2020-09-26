function generateRandom(iteraciones, semilla){
  for(let i = 0; i<iteraciones; i++){
    [semilla, numGenerado]=metodoDelCuadradoMedio(semilla);
    console.log(semilla);
  }
  return semilla;
}

function metodoDelCuadradoMedio(semilla){
  let semillaLength = semilla.toString();
  semillaLength = semillaLength.length;
  let num = Math.pow(semilla, 2);
  let numString = num.toString();
  let tamNum = numString.length;
  let mid = Math.trunc((tamNum-semillaLength)/2);
  numString = numString.substring(mid,mid+semillaLength);
  return [Number(numString),num];
}



generateRandom(12,154);

