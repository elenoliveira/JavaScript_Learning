/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, 
taxa de juros e  tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e 
a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function calculo(cI = 1000, tJA = 0.02, tA = 24){
    tJM = tJA/12
    tJSimples = (cI * tJA) + cI
    console.log(cI * tJA)
    this.simples = function(){
        console.log("Com uma taxa de juros simples o valor ", cI, "aplicado em", tA, "meses é de", tJSimples.toFixed(2), "€")
    }
    this.composto = function(){
        let jComposto = cI
        for (i = 1; i<=tA; i++){
            jComposto += tJM * jComposto
        }
        console.log("Com uma taxa de juros compostos o valor ", cI, "aplicado em", tA, "meses é de", jComposto.toFixed(2), "€")
    }
}

calculo = new calculo()
calculo.simples()
calculo.composto()