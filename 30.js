const [id, quant]=prompt(   
`
------------------------------------------
1- Cacchorro quente: R$ 4.00
2- X-Salada: R$ 4.50
3-X-Bacon: R$ 5.00
4-Torrada simples: R$ 2.00
5-Refringerante R$ 1.50
 ----------------------------------------
Digite o Número do pedido e a quatidade
: `).split(' ').map(Number)

const Cq=4.00
const Xs =4.50
const Xb=5.00
const Ts=2.00
const Re=1.50

switch (id) {
    case 1:
       console.log(`	
Total: R$ ${(Cq*quant).toFixed(2)}`);
        break;
case 2:
    console.log=(`	
Total: R$ ${(Xs*quant).toFixed(2)}`);
    break;
    case 3:
        console.log(`	
Total: R$ ${Xb*quant.toFixed(2)}`);
        break;
        case 4:
            console.log(`	
Total: R$ ${(Ts*quant).toFixed(2)}`);
            break;
            case 5:
                console.log(`	
Total: R$ ${(Re*quant).toFixed(2)}`)
                break;
    default:
        break;
}