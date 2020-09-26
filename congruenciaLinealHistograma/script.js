var datos = [];


function generarRandom(iteraciones, x,a,c,m){
  for(let i = 0; i<iteraciones;i++){
    x = congruenciaLineal(x,a,c,m);
    datos[i] = x/Math.pow(2,32); 
  }
}

function congruenciaLineal(x, a, c, m){
  const temp = a*x+c;
  return temp % m;
}

generarRandom(10000,1664525,1013904223,7,Math.pow(2,32));

console.log(datos);



var trace = {
    x: datos,
    type: 'histogram',
  };
var data = [trace];
Plotly.newPlot('myDiv', data);