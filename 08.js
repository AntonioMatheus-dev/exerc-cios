const texto=prompt("Digite seu nome e veja ele de trás pra frente: ")

function string(){
return texto.split('').reverse().join('')
}
console.log(string())