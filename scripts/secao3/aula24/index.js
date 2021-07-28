/*Condicional - Desvio de fluxo */
//if pode ser usado sozinho
//else sempre precisa de um if antes
//Pode ter vários else if na checagem
//Somente um else 
const hora = 24;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log('Boa Tarde!');
} else if (hora < 23){
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}