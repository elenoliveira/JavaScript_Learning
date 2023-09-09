/*
    12)​ Faça um algoritmo que calcule o fatorial de um número.
    Ex: Fatorial de 5 = 5 * 4 * 3 * 2 * 1 
*/
function fatorial(num){
    let soma = 1
    for (let i = num; i > 1; i--){
        soma = soma * i
    }
    return soma
    
    /* Alternativa
    for (let i = 1; i <= num; i++){
        soma = soma * i
        console.log(i, soma)
    }
    */

}

console.log(fatorial(5))