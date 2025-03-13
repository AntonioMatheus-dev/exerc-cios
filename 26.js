
const numero= Math.floor(Math.random() * 101)
let tentativas=10
while(tentativas>0){
    let palpite=parseInt(prompt(`Digite o seu paltpite`))
if(numero===palpite){
    console.log('Parábens voce acerto!!')
    break;
}else if(palpite>numero){
    console.log('Seu palpite é maior')
}else{
    console.log('Seu palpite é menos')
}

tentativas --;
console.log(`${tentativas} Tentativas `)

}

if(tentativas===0){
    console.log(`Suas tentativas acabaram, o número secreto era ${numero}`)
}
