const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/* Mesma forma, versão longa
    const resultado = nota =>{
        return nota >= 7 ? 'Aprovado' : 'Reprovado'
    }
*/

console.log(resultado(7.1))
console.log(resultado(6.7))