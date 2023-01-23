console.log(Math.ceil(6.1)) //ceil arredonda acima floor arredonda abaixo

const obj1 ={}
obj1.nome = 'Bola'
//obj1.['nome'] = 'Bola2' outra forma de criar objeto NÃO MUITO RECOMENDADO
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //criar um objeto público com o -> this
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()