/*07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na 
equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
um string com a frase: “Delta é negativo”.
(-b±√(b²-4ac))/(2a)*/

function fResolv(a = 3, b = -5, c = 12){
    let Pos = 1, Neg = -1, d = (Math.pow(b, 2)-4*a*c)
    if (d < 0){
        return "Delta é negativo"
    }
    Pos = (-b+Math.sqrt(d))/(2*a)
    Neg = (-b-Math.sqrt(d))/(2*a)
    return [Pos, Neg]
}
console.log(fResolv())
console.log(fResolv(1, 2, -15))
console.log(fResolv(1, 0, 4))
console.log(fResolv(1, -17, 60))