/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const notas = (cod, n1, n2, n3) =>{
    let organiza = [Number(n1), Number(n2), Number(n3)]
    organiza.sort((a, b) =>{
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
    let media = (((organiza[2] * 4) + (organiza[0] * 3) + (organiza[1] * 3)) / 10)
    //organiza.sort((a, b) => a - b) Faz o mesmo que a situação acima
    if(media.toFixed(2) >= 5){
        return (cod + " " + organiza + " Média: " + media + " APROVADO")
    }
    if(media.toFixed(2) < 5){
        return (cod + " " + organiza + " Média: " + media + " REPROVADO")
    }
}

console.log(notas(49114, 9, 10, 8))
console.log(notas(49113, 3, 1, 7))
console.log(notas(49112, 3, 1, 10))
console.log(notas(49116, 7, 5, 6))
console.log(notas(49113, 3, 1, 2))