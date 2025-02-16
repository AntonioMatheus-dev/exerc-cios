//Exercício de Loops Crie um loop que imprima todos os números de 1 a 100. Para cada múltiplo de 3, imprima "Fizz" ao invés do número, e para cada múltiplo de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz". deixa eu ver esse

for(let i=0; i<=100; i++){
    if(i%3==0 && i%5===0){
        console.log('FizzBuzz')
    }else if(i%3===0){
        console.log('Fizz')
    }else if(i%5===0){
        console.log('Buzz')
    }else{
        console.log(i);
    }
}