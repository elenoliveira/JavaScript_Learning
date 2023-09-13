/*36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const f1 = (arr, num) =>{
    let arr1 = []
    for(i = 0; i < arr.length; i++){
        arr1.push(arr[i] * num)
    }
    return arr1
}
const f2 = (arr, num) =>{
    let arr2 = []
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 5){
            arr2.push(arr[i] * num)
        }
    }
    return arr2
}

console.log(f1(arr, 2), f2(arr, 2))
