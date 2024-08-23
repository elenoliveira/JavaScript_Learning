// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx => ctx.valor3 = "mid3" //apesar de receber o execPasso(), ele descarta porque só pode receber 1 parâmetro

const exec = (ctx, ...middlewares) => { /* função que recebe objecto a modificar e 
                                        um array com as funções que vão modificar o objecto */
    const execPasso = indice =>{ // função recebe indice
        middlewares && indice < middlewares.length && 
        middlewares[indice] (ctx, () => execPasso(indice + 1)) /* middlewares[0] == passo1({}, execPasso(1) = 
                                                                passo2({mid1}, execPasso(2) = 
                                                                passo3 ({mid1, mid2}, execPasso(3)))) */
    }
    execPasso(0)
}

const ctx = {} //objecto vazio
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

/* tabela do and
1 && 1 = 1
1 && 0 = 0
0 && 1 = 0
0 && 0 = 0
*/
