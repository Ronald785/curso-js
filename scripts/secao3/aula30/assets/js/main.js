/*
function mensagem() {
    const res = document.querySelector('.container h1');
    res.innerHTML = criaData();
}

function criaData() {
    const data = new Date();

    const diaS  = diaEscrito(data.getDay());
    //3º forma
    const mes = mesEscrito(data.getMonth());


    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return ( `${diaS}, ${dia} de ${mes} de ${ano} às ${hora}:${min}`);
}

function zeroAEsquerda(data) {
    return data >= 10 ? data : `0${data}`
}

function diaEscrito(dia) {
    const dias = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    return dias[dia]
}

// function diaEscrito(dia){
//     let diaEscrito
//     switch(dia) {
//         case 0: return diaEscrito = 'Domingo';
//         case 1: return diaEscrito = 'Segunda-feira';
//         case 2: return diaEscrito = 'Terça-feira';
//         case 3: return diaEscrito = 'Quarta-feira';
//         case 4: return diaEscrito = 'Quinta-feira';
//         case 5: return diaEscrito = 'Sexta-feira';
//         case 6: return diaEscrito = 'Sábado';
//     }
// }

//3º
function mesEscrito(mes) {
    const meses = [
        Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho',
        'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro'
    ]
    return meses[mes]

}

// function mesEscrito(mes){
//     let mesEscrito
//     switch(mes) {
//         case 0:  return mesEscrito = 'Janeiro';
//         case 1:  return mesEscrito = 'Fevereiro';
//         case 2:  return mesEscrito = 'Março';
//         case 3:  return mesEscrito = 'Abril';
//         case 4:  return mesEscrito = 'Maio';
//         case 5:  return mesEscrito = 'Junho';
//         case 6:  return mesEscrito = 'Julho';
//         case 7:  return mesEscrito = 'Agosto';
//         case 8:  return mesEscrito = 'Setembro';
//         case 9: return mesEscrito = 'Outubro';
//         case 10: return mesEscrito = 'Novembro';
//         case 11: return mesEscrito = 'Dezembro';
//     }
// }
mensagem();
*/
//2º forma
const res = document.querySelector('.container h1');
const data = new Date();
res.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });