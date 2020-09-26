function generateRandom(iteraciones, semilla1, semilla2){
  for(let i = 0; i<iteraciones; i++){
    [semilla1,semilla2, numGenerado]=metodoDelProductoMedio(semilla1, semilla2);
    console.log(semilla1)
  }
  return semilla1;
}

function metodoDelProductoMedio(semilla, semilla2){
  let semillaLength = semilla.toString();
  let semillaLength2 = semilla2.toString().length;
  if(semillaLength>semillaLength2){
    semillaLength=semillaLength2;
  }
  

  let num = semilla*semilla2;
  let numString = num.toString();
  let tamNum = numString.length;
  let mid = Math.trunc((tamNum-semillaLength)/2);
  if(numString[mid]==="0" ){
    mid = mid+1;
  }
  if(numString.length<=(mid+semillaLength)){
    semillaLength--;
  }
  numString = numString.substring(mid,mid+semillaLength);

  return [Number(semilla2),Number(numString),num];
}


generateRandom(18,151,155)