function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            cons.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else {
                resolve(valor)
            }
        }catch(e) {
            reject(e)
        }
        
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .then(() => console.log('Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) //catch sempre no final