const opcoes=prompt(`Digite:
1-todos os numeros pares até 100
2-todos os numeros impares até 100
:`)

if(opcoes==1){
    console.log(par())
}else if(opcoes==2){
    console.log(impar())
}else{
    console.log(`opção ivalida`)
}
function par(){
for (let i=0; i<=100; ++i){
    if(i%2==0){
    console.log(i)
}
}}

function impar(){
    for(let i=0; i<=100; ++i){
        if(i%2==1){
            console.log(i)
        }
    }
}