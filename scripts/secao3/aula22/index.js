/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU 
! -> NOT -> NÂO
*/
console.log('&& / E: ' + (true && true && true && true));//true
console.log('&& / E: ' + (true && true && false && true));//false
console.log('|| / Ou: ' + (true || false));//true, pelo menos uma true
console.log('|| / Ou: ' + (false || false));//false

const usuario = 'Ronald';
const senha = '123456';
                        //true              //false
const vaiLogar = usuario === 'Ronald' && senha === '12345';
console.log(vaiLogar);//false

console.log(false)//false
console.log(!false)//true
console.log(!!true)//true //É possível negar mais de uma vez

