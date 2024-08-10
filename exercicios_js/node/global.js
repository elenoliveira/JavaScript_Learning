//console.log(global)
global.MinhaApp = Object.freeze({ //freeze evita possíveis alterações
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
