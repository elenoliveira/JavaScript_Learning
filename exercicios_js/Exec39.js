/*39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
let v1 = [1, 2, 3], v2 = [4, 5, 6]
const troca = (A, B) =>{
    for(i = 0; i < A.length; i++){
        [A[i], B[i]] = [B[i], A[i]]
    }
    return [A, B]
}

console.log(v1, v2)
console.log(troca(v1, v2))
console.log(v1, v2)