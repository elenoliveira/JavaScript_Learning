/*40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const classificacao = (notas) =>{
    for(i = 0; i < notas.length; i++){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
            console.log(notas[i], 'Classificação D')
        }else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            console.log(notas[i], 'Classificação C')
        }else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            console.log(notas[i], 'Classificação B')
        }else if(notas[i] >= 9.0 && notas[i]<= 10){
            console.log(notas[i], 'Classificação A')
        }else{
            console.log(notas[i], 'Nota Inválida')
        }
    }    
}
let arr = []
for(i = 0; i < 5; i++){
    arr.push((Math.random()*10).toFixed(1))
}
console.log(arr)
classificacao(arr)
/* --- Alternativa ---
const Verifica = (notas) =>{
    let arra = []
    for(i = 0; i < notas.length; i++){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
            arra.push('D')
        }else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            arra.push('C')
        }else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            arra.push('B')
        }else if(notas[i] >= 9.0 && notas[i]<= 10){
            arra.push('A')
        }else{
            arra.push(null)
        }
    }
    return arra
}
console.log(arr, Verifica(arr)) */