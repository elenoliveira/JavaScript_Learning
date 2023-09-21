Array.prototype.map2 = function (callback){
    let arr = []
    for(i = 0; i < this.length; i++){
        arr.push(callback(this[i], i, this))
    }
    return arr
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const toObj = json => JSON.parse(json)
const getPrice = product => product.preco

const result = carrinho.map2(toObj).map2(getPrice)
console.log(result)

