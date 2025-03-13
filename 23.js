let numero=parseInt(prompt('Digite  um Número e veja todos os números pares até ele: '))
let contador=0

while (contador<=numero) {
    if(contador%2===0){
        console.log(contador)
    }
    contador ++
}