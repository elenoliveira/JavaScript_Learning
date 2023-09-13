/*27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function criancamenor (altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        return "As crianças têm a mesma altura"
    }
    if ((altura1 < altura2 && taxa1 <= taxa2) || 
    (altura2 < altura1 && taxa2 <= taxa1)){
        return "A criança menor nunca irá ultrapassar a maior"
    }
    let anos = 0
    if (altura1 < altura2){
        while(altura1 <= altura2){
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        return `A criança1 irá ultrapassar a criança2 em ${anos} anos`
    }
    if (altura2 < altura1){
        while(altura2 <= altura1){
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        return `A criança2 irá ultrapassar a criança1 em ${anos} anos`
    }
}

console.log(criancamenor(120, 10, 120, 10))
console.log(criancamenor(120, 10, 130, 20))
console.log(criancamenor(130, 20, 120, 10))
console.log(criancamenor(120, 20, 130, 10))
console.log(criancamenor(130, 10, 120, 20))
