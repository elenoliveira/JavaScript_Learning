const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const resultado = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
    return acumulador && atual

}, true) //o inicial não é obrigatório!
console.log(resultado)

    // Versão Professor
    const todosBolsistas = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio 2: Algum aluno é bolsista?

const resultado1 = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
    return acumulador || atual
}, false)
console.log(resultado1)

        // Versão Professor
        const algumBolsista = (resultado, bolsista) => resultado || bolsista
        console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
    


