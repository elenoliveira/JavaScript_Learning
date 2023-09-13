/*29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/
let arr = []
const contador = (arr) =>{
    let dentro = 0, fora = 0
    for (i = 0; i < arr.length; i++){
        if(arr[i] >= 10 && arr[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }
    return `Dentro: ${dentro} Fora: ${fora}`
}
for(i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * (100 - 1)+1))
}
console.log(arr, contador(arr))