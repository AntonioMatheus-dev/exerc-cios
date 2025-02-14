const palavra=prompt('Digite uma palavra: ')

function verificarpalindrome(){
const palavrainvertida=palavra.split(' ').reverse().join('');
return palavra===palavrainvertida
}
 console.log(verificarpalindrome())
 
