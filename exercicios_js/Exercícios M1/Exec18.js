/*18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const n = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
let i

const extenso = (num) =>{
    switch(num){
        case 1: return n[0]
        case 2: return n[1]
        case 3: return n[2]
        case 4: return n[3]
        case 5: return n[4]
        case 6: return n[5]
        case 7: return n[6]
        case 8: return n[7]
        case 9: return n[8]
        case 10: return n[9]
        default: return 'Número fora do intervalo'
    }
}

for(i = 1; i <= n.length+1; i++){
    console.log(extenso(i))
}