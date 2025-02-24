let impa=[]
let par=[]
let numeros=[1,2,3,4,5,6,7,8,]

function numeroimpar(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2===1){
            impa.push(numeros[i])
        }
    }
}
function numerospar(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2===0){
            par.push(numeros[i])
        }
    }
}
numerospar()
numeroimpar()
console.log(impa)
console.log(par)