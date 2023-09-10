/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130*/

const adicional = [80, 50, 95, 130]

const premio = (idade) =>{
    if(idade >= 0 && idade < 10){
        return 100 + adicional[0]
    }
    if(idade >= 10 && idade <= 30){
        return 100 + adicional[1]
    }
    if(idade > 30 && idade <= 60){
        return 100 + adicional[2]
    }
    if (idade > 60){
        return 100 + adicional[3]
    }
    return "Idade Inválida"
}

console.log(premio(9))
console.log(premio(10))
console.log(premio(30))
console.log(premio(31))
console.log(premio(60))
console.log(premio(61))
console.log(premio(-1))