/*31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let arr = []
const verifica = (arr) =>{
    let cont = 0
    for(i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            cont ++
        }
    }
    return cont

}
for(i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * (10 - (-10))-10))
}
console.log(arr, verifica(arr))