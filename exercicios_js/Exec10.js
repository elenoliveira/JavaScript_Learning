/*10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
e retorne true ou false.*/

function divtres(num){
    if (num%3 == 0){
        return true
    }
    return false
}

for(i=0; i <= 30; i++){
    console.log(i, divtres(i))
}