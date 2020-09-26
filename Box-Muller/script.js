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

//console.log(datos);


function toBoxMuller(datos){
  let answer = [];
  for(let i = 0; i<datos.length; i=i+2){
    let x1 = Math.sqrt(-2 * Math.log(datos[i])) * Math.cos(2*Math.PI*datos[i+1]);
    let x2 = Math.sqrt(-2 * Math.log(datos[i])) * Math.sin(2*Math.PI*datos[i+1]);
    answer.push(x1);
    answer.push(x2);
  }
  return answer;
}

let BoxMuller = toBoxMuller(datos);

var normalizado = {
  x: datos,
  type: 'histogram',
};
var datosNormalizados = [normalizado];
Plotly.newPlot('normalDistribution', datosNormalizados);

var trace = {
    x: BoxMuller,
    type: 'histogram',
  };
var data = [trace];
Plotly.newPlot('myDiv', data);