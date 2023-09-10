/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação 
e a realize com os valoresnuméricos na ordem que foram inseridos. 
Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
Crie um caso default para operações inválidas.*/

const op = ['+', '-', '*', '/']
let soma = 0, sub = 0, mult = 0, div = 0, i

const calculadora = (num1, num2, str) => {
    switch(str){
        case op[0]: return num1 + num2
        case op[1]: return num1 - num2
        case op[2]: return num1 * num2
        case op[3]:
            if (num2 == 0){
                return 'Não é possível dividir um número por 0.'
            }else{
                return num1 / num2
            }
        default: return 'O operador é inválido.'
    }
}

for (i = 0; i <= op.length; i++){
    console.log('1', op[i], '2 = ', calculadora(1, 2, op[i]))
    console.log('2', op[i], '0 = ', calculadora(2, 0, op[i]))
}