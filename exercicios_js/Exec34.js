/*34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

let strings = (StrA, StrB) =>{
    console.log(StrA, StrB)
    let StrA1 = [], StrB1 = [], StrA2 = [], StrB2 = []

    for(let i = 0; i < StrA.length; i++){
        StrA1[StrA[i]] = StrA[i]
    }
    for(let i = 0; i < StrB.length; i++){
        StrB1[StrB[i]] = StrB[i]
    }
    for(let i in StrA1){
        StrA2.push(StrA1[i])
    }
    for(let i in StrB1){
        StrB2.push(StrB1[i])
    }
    if(StrA2.length != StrB2.length){
        return false
    }
    for(let i = 0; i < StrA2.length; i++){
        if (StrA2[i].toLowerCase() != StrB2[i].toLowerCase()){
            return false
        }
    }
    return true
}

console.log(strings("casaco", "caso"))
console.log(strings("casaco", "casao"))
console.log(strings("casaco", "casa"))