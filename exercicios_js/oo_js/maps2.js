const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
let precos = []
let v = carrinho.map( function(e) {
    return JSON.parse(e)
})
for(i = 0; i < v.length; i++){
    precos.push(v[i].preco)
}
console.log(precos)

// Versão professor
// Retornar um array apenas com os preços
const toObj = json => JSON.parse(json)
const getPrice = product => product.preco

const result = carrinho.map(toObj).map(getPrice)
console.log(result)