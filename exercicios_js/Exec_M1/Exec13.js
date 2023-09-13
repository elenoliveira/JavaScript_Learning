/* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou 
dia inválido dado o número referente ao dia. 
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const isWeekend = (day) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    switch(day){
        case 1: case 7: console.log(`${days[day-1]} é Fim de Semana`)
            return true
        case 2: case 3: case 4: case 5: case 6: console.log(`${days[day-1]}-feira é Dia Útil`)
            return false
        default: console.log(`O dia inserido é inválido`)
    }
}

for (let i = 0; i <= 7; i++){
    isWeekend(i)
}