const distancia=parseInt(prompt('Digite a distância pecorrida: '))
const combustivel=parseFloat(prompt('Digite a quantidade de combustivel gasto: '))
const gasto=distancia/combustivel;
console.log(gasto.toFixed(3), 'km/l ');