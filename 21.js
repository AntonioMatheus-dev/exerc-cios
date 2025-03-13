function calcularnotas(valor){
    const notas=[100, 50, 20, 10, 5, 2, 1]
    const quantidadesdenotas={}

    for (let nota of notas) {
        quantidadesdenotas[nota]=Math.floor(valor/nota);
        valor %= nota;
    }
    return quantidadesdenotas
}

const valor=parseInt(prompt('Digite um valor e vja quantas notas são nescessarias:'),10)

const resultado=calcularnotas(valor)

console.log(valor)

for(let nota of [100,50,20,10,5,2,1]){
    console.log(`${resultado[nota]} nota(s) de R$ ${nota},00`)
}