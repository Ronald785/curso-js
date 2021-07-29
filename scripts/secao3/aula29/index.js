//Onde utilizar switch
/* 
Checar valores que estão sendo comparados de uma mesma variável
*/
const data = new Date();
let dia = data.getDay();
let diaSemana;

//break é saida da condição 
switch (dia) {
    case 0:
        diaSemana = 'Domingo';
    break;
    case 1:
        diaSemana = 'Segunda';
    break;
    case 2:
        diaSemana = 'Terça';
    break;
    case 3:
        diaSemana = 'Quarta';
    break;
    case 4:
        diaSemana = 'Quinta';
    break;
    case 5:
        diaSemana = 'Sexta';
    break;
    case 6:
        diaSemana = 'Sábado';
    break;
    default:
        console.log("Dia inválido!")
    break;
}
console.log(dia, diaSemana);