let impar=[]
let par=[]
let numeros=[1,2,3,4,5,6,7,8]
function numeropar(){
    for(let i=0; i< numeros.length;i++){
        if(numeros[i]%2===0){
            par.push(numeros[i]);
        }
    }
}
    
function numeroimpar(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2===1){
            impar.push(numeros[i])
        }
    }
}
numeroimpar()
numeropar()

console.log(`Números par ${par}`)
console.log(`Números impar ${impar}`)