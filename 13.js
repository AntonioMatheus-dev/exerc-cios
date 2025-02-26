const NomeDoVendedor=prompt("Digite o nome do vendedor:")
const salariofixo=parseFloat(prompt('Digite o salário fixo: '))
const totaldevendas=parseFloat(prompt('Digite o total de vendas: '))
const total=(totaldevendas*0.15)+salariofixo
console.log(`Total = ${total.toFixed(2)}`)
