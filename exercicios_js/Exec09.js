/*09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. 
As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo 
de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 
e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.*/

function Classificacao(nota){
    if (nota > 100 || nota < 0){
        console.log("Nota Inválida")
    }else if (nota < 38){
        console.log("O aluno foi reprovado com a nota", nota)
    }else if(nota >= 38 && nota <= 40){
        nota = 40
        console.log("O aluno foi aprovado com a nota", nota)
    }else if (nota%5 == 0){
        console.log("O aluno foi aprovado com a nota", nota)
    }else{
        let teste = nota
        teste /= 10 //Divide o número ex: 43 = 4.3
        teste = teste - Math.floor(nota/10) //Remove a parte inteira
        teste = Math.floor(teste*10) //Move uma casa decimal ex: 0.9 = 9
        switch (teste){
            case 3: case 4: 
                nota += 5 - teste //Nota + 5 - valor de teste ex: 43 = 43 + 5 - 3 -> 45
                break
            case 8: case 9:
                nota += 10 - teste //Nota + 10 - valor de teste ex: 48 = 48 + 10 - 8 -> 50
        }
        console.log("O aluno foi aprovado com a nota", nota)
    }
}

for (i = -1; i <= 101; i++){
    Classificacao(i)
}
