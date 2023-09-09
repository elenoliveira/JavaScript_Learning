/*11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
imprimindo no console a mensagem e retornando true ou false.*/

function bissexto(ano){
    if(ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
        console.log(`O ano ${ano} é bissexto`)
        return true
    }else{
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
}

bissexto(2022)
bissexto(1900)
bissexto(2024)
bissexto(2000)
bissexto(2012)
