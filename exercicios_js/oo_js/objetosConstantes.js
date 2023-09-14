// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' //Atribui para a variável nome e não para o objecto
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } // não pode reatribuir se for const

Object.freeze(pessoa) // Fica "bloqueado" a alterações futuras

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)