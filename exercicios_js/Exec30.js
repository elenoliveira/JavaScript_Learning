/* 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

let arr = []
const verifica = (arr) =>{
    let min = arr[0]
    let max = arr[0]
    for(i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return `O menor número é ${min} e o maior é ${max}`
}
for(i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * (100 - 1)+1))
}
console.log(arr, verifica(arr))