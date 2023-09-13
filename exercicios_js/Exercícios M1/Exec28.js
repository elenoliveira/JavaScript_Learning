/*28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

let vetor = [], par = 0, impar = 0
for (let i = 0; i < 10; i++){
    vetor.push(Math.floor(Math.random() * (100 - 1) + 1))
}
for (let i = 0; i < vetor.length; i++){
    if(!(vetor[i]%2)){ //ou vetor[i]%2 == 0
        par++
    }else{
        impar++
    }
}
console.log(vetor, par, 'são par', impar, 'são impar')