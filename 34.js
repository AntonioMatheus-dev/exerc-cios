const numero=Number(prompt('Digite quantos Ho Ho! deseja receber do papaai Noel: '))
let resultado=''
for(let i=1;i<=numero;i++){
if(i===numero){
    resultado+='Ho!'
}else{
    resultado+='Ho '
}
}
console.log(resultado)
