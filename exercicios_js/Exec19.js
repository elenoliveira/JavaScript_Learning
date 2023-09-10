/*19) ​O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const precos = [3, 4, 5.5, 7.5, 3.5, 2.8]
const codigo = [100, 200, 300, 400, 500, 600]
let i

const menu = (cod, quantidade) =>{
    switch (cod){
        case codigo[0]:
            return quantidade * precos[0]
        case codigo[1]:
            return quantidade * precos[1]
        case codigo[2]:
            return quantidade * precos[2]
        case codigo[3]:
            return quantidade * precos[3]
        case codigo[4]:
            return quantidade * precos[4]
        case codigo[5]:
            return quantidade * precos[5]
        default: return 'O produto não existe'
    }
}

for(i = 0; i <= codigo.length; i++){
    console.log(menu(codigo[i], 2))
}