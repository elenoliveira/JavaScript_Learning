function Pessoa(nome) {
    //atributo nome1 é igual ao valor recebido pela função através da variável nome
    this.nome1 = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome1}`)
    }
}

let var1 = 'Ana', var2 = 'José'

const nomedaAna = new Pessoa (var1)
const nomedoJose = new Pessoa (var2)
//console.log(nomedaAna.falar())

nomedaAna.falar()
nomedoJose.falar()
//console.log(typeof Pessoa, typeof nomedaAna)
//const p1 = new Pessoa ('João')
//p1.falar()

/*function Pessoa (nome){
    this.nome = nome
    return nome
    const p1 = function(){
        //nome = new Pessoa('José')
        return this.nome = nome
    }
}

p1 = new Pessoa('José')

console.log('Meu nome é ', p1)*/

function Carro(vmax1 = 150, d1 = 5){
    let vmax = vmax1
    let d = d1
    let velatual = 0
    this.acelerar = function(){
        if (velatual+d <= vmax){
            velatual += d
        }else{
            velatual = vmax
        }
    }
    
    this.imprime = function(){ 
        console.log('Teste', velatual)
    }

    this.setVA = function(v){
        if (v <= vmax){
            velatual = v
        }else{
            velatual = vmax
        }
    }
}

ferrari = new Carro(300, 50)
ferrari.imprime()
ferrari.setVA(150)
ferrari.imprime()
ferrari.acelerar()
ferrari.imprime()
ferrari.setVA(1000)
ferrari.imprime()

