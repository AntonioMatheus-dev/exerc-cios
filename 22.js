//divida o valor de tempo por 60-minutos
//divida o valor de tempo por 3600-horas

const segundos=prompt('Digite os segundos e veja em horas,minutos e segundos: ');
const minutos=Math.floor((segundos%3600)/60);
const horas=Math.floor(segundos/ 3600);
const resto=segundos%60
console.log(`${horas}:${minutos}:${resto}`);