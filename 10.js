//uma função que receba uma frase como entrada e retorne uma nova frase em que cada palavra tenha sua primeira letra em maiúscula.

function func(frase){
    return frase.split(' ').map(palavra=>palavra.charAt(0).toUpperCase()+palavra.slice(1)).join(' ')
}
console.log(func('java script'))