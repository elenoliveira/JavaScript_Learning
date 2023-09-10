/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) 
que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const anuidade = (mes, valor) =>{
    let result = valor
    for(let i = 2; i <= mes; i++){
        result *= 1.05
    }
    return result.toFixed(2)
}
for (let i = 1; i <= 12; i++){
    console.log('Mês', i, ': ', anuidade(i,1000))
}