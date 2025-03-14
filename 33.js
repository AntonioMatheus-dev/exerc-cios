
let [A,B,C,D]=prompt('Digite os 4 valores o triângulo: ').split(' ').map(Number)

function valores(x,y,z){
    return x+y>z && x+z > y && y+z>x 
}
if(
valores(A,B,C)||
valores(A,B,D)||
valores(A,C,D)||
valores(B,C,D)
){
    console.log('S')
}else{
    console.log('N')
}