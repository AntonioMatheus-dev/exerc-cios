const [a,b,c,d]=prompt('Digite 4 valores: ').split(' ').map(Number);

const s1=c+d
const s2=a+b

c>0&& d>0 && a%2===0 && b>c && d>a && s1 > s2? console.log('Valores aceitos'):console.log('Valores nao aceitos')
