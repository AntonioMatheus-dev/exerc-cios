
const numeros=[];

let numero=prompt('Digite números para mostrar a soma entre eles: ')
 let separarnumeros=numero.split(',')
 for(let i=0; i<separarnumeros.length; i++){
    numeros.push(parseInt(separarnumeros[i]))
 }
let soma=0
 for(let i=0;i<numeros.length;i++){
  soma+=numeros[i]
 }
 console.log(`A soma dos numeros ${numero} é igual: ${soma}`)
