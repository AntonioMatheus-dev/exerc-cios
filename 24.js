let x=[]

for(let i=0;i<=10; i++){
    let valor=Number(prompt('Digite 10 valores e veja o vetor: '))
    if(valor<=0){
        valor=1
    }
    x.push(valor)
}

for(let i=0;i<=10;i++){
    console.log(`X${i} = [${x[i]}]`)
}