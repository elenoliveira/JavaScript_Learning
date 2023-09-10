/*03) Crie uma função que recebe dois parâmetros, base e expoente, 
e retorne a base elevada ao expoente.*/

function expoente(base, exp){
    if (exp == 0) return 1
    let resultado = base
    for (let i = 1; i < exp; i++){
        resultado *= base
    }
    return resultado
}
let base = 2, exp = 8
console.log("O resultado de", base, '^', exp, "é", expoente(base, exp))
