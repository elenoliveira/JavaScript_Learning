/*37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos.*/

const pAri = (n, a1, r) =>{
    let A1 = [a1], soma = a1
    for(i = 1; i < n; i++){
        a1 += r
        A1.push(a1)
        soma += A1[i]
    }
    return `Progressão Aritmética:${A1}\nResultado:${soma}`
}

const pGeo = (n, a1, r) =>{
    let A1 = [a1], soma = a1
    for (i = 1; i < n; i++){
        a1 *= r
        A1.push(a1)
        soma += A1[i]
    }
    return `Progressão Geométrica:${A1}\nResultado:${soma}`
}

console.log(pAri(10, 2, 2))
console.log(pGeo(10, 2, 2))