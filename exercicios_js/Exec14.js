/* 14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e 
que possua três casos: 
Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos com escassez de kiwis”. 
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console.*/
const f = ['Maçã', 'Kiwi', 'Melancia', 'Outras']
const frutas = (fruta) => {
    switch(fruta){
        case f[0]: 
            return "Não vendemos esta fruta aqui."
        case f[1]: 
            return "Estamos com escassez de kiwis."
        case f[2]:
            return "Aqui está, são 3 reais o quilo."
        default:
            return "Erro"
    }
}

console.log(f[0], '-', frutas('Maçã'))
console.log(f[1], '-', frutas('Kiwi'))
console.log(f[2], '-', frutas('Melancia'))
console.log(f[3], '-', frutas('Pera'))