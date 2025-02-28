const [x1, y1]=prompt('Digite a velocidade : ').split(' ').map(parseFloat);
const [x2, y2]=prompt(': ').split(' ').map(parseFloat);
const Distancia=Math.sqrt(Math.pow(x2-x1, 2)+ Math.pow(y2-y1,2));
console.log(Distancia.toFixed(4)) 

