/*32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

let media = 0, soma = 0, arr = []

for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * (100 - 10)+10))
}
for(let i = 0; i < arr.length; i++){
    soma += arr[i]
}
media = soma/arr.length
console.log('Vector:', arr, 'Soma:', soma, 'Media:', media)
