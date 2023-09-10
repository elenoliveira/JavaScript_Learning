/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

function divisao(divisor, dividendo){
    resultado = divisor / dividendo
    resto = divisor % dividendo
    console.log("O resultado da divisão é", Math.floor(resultado), "e o resto é ", resto)

}

divisao (10,2)
