/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o 
mínimo de cédulas para um determinado valor informado pelo usuário considerando 
notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais cédulas): 
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const notas = [100, 50, 10, 5, 1] // notas existentes
const verifica = (valor) =>{ //função que recebe um valor e verifica as notas usadas
    let vezes = [] // array vazio que irá receber a quantidade de vezes que uma nota foi usada
    for(i = 0; i < notas.length; i++){ // enquanto i for menor que o tamanho do array
        vezes.push(Math.floor(valor/notas[i])) //insere a quantidade de vezes utilizadas de uma nota específica arredondando para inteiro
        valor = valor % notas[i] // guarda o resto do valor que não foi usado nas notas já testadas
        if(vezes[i] != 0){ // se o nr de vezes na posição atual for diferente de 0
            console.log(vezes[i], 'notas de', notas[i])
        }
    }
    console.log()
}

verifica(150)
verifica(367)
verifica(18)
verifica(28)
verifica(12)