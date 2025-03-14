
const [nt1,nt2,nt3,nt4]=prompt('Digite as 4 notas: ').split(' ').map(parseFloat);
const media=(nt1*2+nt2*3+nt3*4+nt4*1)/10
console.log(`Media: ${media.toFixed(1)}`)
if(media >=7){
console.log('Aluno aprovado.')
}else if(media<5){
    console.log('Aluno reprovado.')
}else if(media>=5 && media<=6.9){
    console.log('Aluno em exame.')
    exame()
}
function exame(){
    const exame=Number(prompt('Digte a nota do exame: '))
    const notaf=(exame+media)/2
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    notaf>=5.0?console.log('Aluno aprovado.'):console.log('Aluno Reprovado.')
    console.log(`Media final: ${notaf.toFixed(1)}`)
}