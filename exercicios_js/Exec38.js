/*38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const impares = (min = 0, max = 100) =>{
    if(max < min){
        let aux = min
        min = max
        max = aux
    }
    for(i = min; i <= max; i++){
        if(i & 1){ // ou if(i%2 == 1) ou (!(i%2 == 0))
            console.log(i)
        }
    }
}

impares()
impares(20, 10)
