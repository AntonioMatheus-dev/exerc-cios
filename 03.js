const nome=prompt('Digite o seu nome')
function string(){
    const separação=nome.split(' ')
    const quantidade=separação.join('')
    return quantidade.length;
}
console.log(`O nome ${nome} tem ${string()} letras`)