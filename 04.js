const palavra=prompt('digite uma palavra: ')

function palindromo(){
    const palavraivertida=palavra.split(' ').reverse().join('')
return palavraivertida===palavra
}
 console.log(palindromo())
