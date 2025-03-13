let numero=prompt(': ')

function fatorial(n){
    let resultado=1

    for(let i=1; i<=n; i++){
        resultado *=n
    }
    return resultado
}
console.log(`O fatorial de ${numero} = ${fatorial(numero)}`)