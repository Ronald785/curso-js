//DATA
//Ela é uma função construtora
//Funções construtoras começam com a primeira letra maiúscula
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//1º Forma de ver data
//Milissegundos desde 1º de JAN de 1970, epoca unix
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras); //01/01/1970 Timestamp unix ou época unix
//console.log(data.toString()); //Wed Jul 28 2021 21:03:24 GMT-0300 (Horário Padrão de Brasília)

//2º Forma
//Tralhando com 1 parametro considera milessimos 
//ano e dia pelo menos, detelhe se passar o limite do vai para próximo 
//2021, 6, 32 vai para o próximo mês
//Mes -> 0-11
//a, m, d, h, M, s, ms
//const data = new Date(2021, 6, 28, 21,10,05); //Wed Jul 28 2021 21:10:05 GMT-0300 (Horário Padrão de Brasília)

//3º Forma                                                                 //ms
const data = new Date('2021-07-28 21:16:05.999'); // Date('2021-07-28T21:16:05.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //dia na semana 0-domingo e 6-sábado
console.log('Data em ms do marco zero:', Date.now());

console.log(data.toString()); 

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatDate(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hor = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`
}
const dataBrasil = formatDate(data);
console.log(dataBrasil); // 28/07/2021 21:16:05