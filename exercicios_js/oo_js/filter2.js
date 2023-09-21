Array.prototype.filter2 = function (callback){
    let arr = []
    for(i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            arr.push(this[i])
        }
    }
    return arr
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Viro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p){
    return false // return false (retorna array vazio)
}))
const pp = (p) => p.preco >= 500

const pf = (f) => f.fragil

console.log(produtos.filter(pf).filter(pp))