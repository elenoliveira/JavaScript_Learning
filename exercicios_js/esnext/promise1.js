function primeiroElemento(array){
    return array[0]
}
/* Ou arrow function

const primeiroElemento = (array) => array[0]

Ou arrayOuString

const primeiroElemento = arrayOuString => arrayOuString[0]

*/

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    //.then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

/* No caso da utilização de arrayOuString, 
no primeiro momento, irá chamar a primeira posição
do array e no segundo momento o primeiro elemento do array */