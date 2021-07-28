// Operador ternário
// (condição) ? true : false 
// ? : 
/*
Pode substituir em partes se eu preciso um if else
*/

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

//Facilitação 
const corUsuario = null;
//Informamente isso é setar um valor padrão
const corPadrao = corUsuario || 'Preto'; //fallback
console.log(nivelUsuario, corPadrao);

if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal")
}


