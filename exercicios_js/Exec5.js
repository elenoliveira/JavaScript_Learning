/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. 
Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
O resultado será: 0.30000000000000004. 
Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa.
Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta.
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e 
retorne R$0,30 (observe a vírgula e o ponto)*/

function numeros(cifrao = '$', num1 = 3.2, num2 = 1.45){
    /*"Math.ceil(n*100)/100 = " 
                + Math.ceil(n*100)/100
                + "<br />Math.round(n*100)/100 = "
                + Math.round(n*100)/100*/
    resultado = num1 + num2
    Arredonda = Math.ceil(resultado*Math.pow(10,15))/Math.pow(10,15)
    casadecimal = Arredonda.toFixed(2)
    subs = casadecimal.replace('.', ',')
    console.log(cifrao, subs)
}
numeros('R$')
numeros('R$', 13, 30)
numeros('R$', 13.6234455, 0.0008767)
numeros('R$', 13.6234455, 0.0018767)
