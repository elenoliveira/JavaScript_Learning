/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
de acordo com a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
const tabela = ['A', 'B', 'C']
let A = 0, B = 0, C = 0, i
const aumento = (salario, plano) =>{
    switch(plano){
        case tabela[0]: return `O seu novo salário será ${salario * 1.10}`
        case tabela[1]: return `O seu novo salário será ${salario * 1.15}`
        case tabela[2]: return `O seu novo salário será ${salario * 1.20}`
        default: return `O plano é inválido`
    }
}

for (i = 0; i <= tabela.length; i++){
    console.log(aumento(1500, tabela [i]))
}