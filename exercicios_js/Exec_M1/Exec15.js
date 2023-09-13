/*15) ​Um homem decidiu ir à uma revenda comprar um carro. 
Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. 
Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 
Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. 
Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const carros = ['hatch', 'sedan', 'motocicletas', 'caminhonetes']
const revenda = (carro) =>{
    switch(carro.toLowerCase()){
        case carros[0]: 
            return 'Compra efetuada com sucesso.'
        case carros[1]: case carros[2]: case carros[3]: 
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}
for (let i = 0; i <= carros.length; i++){ //i < carros.length+1
    console.log(carros[i], revenda(carros[i]))
}