const vezes=Number(prompt(`Quantos vezes irá realizar aoperção?
: `))

for(let i=0; i<vezes; i++){
    const [numero1, numero2]=prompt('Digite 2 números ').split(' ').map(Number)
    if(numero2===0){
        console.log('Não é possivel dividir')
    }else{
        console.log(numero1/numero2)
    }
}