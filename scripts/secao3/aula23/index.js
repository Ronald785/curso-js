/*
Apartir do momento que encontra uma falsa para de checar, 
avaliação de curto-circuito
&& -> True: tudo verdadeiro
|| -> False: tudo falso
*/
console.log('Ronald' && 0 &&  'Maria'); // 0, retorna o valor falso
console.log('Ronald' && false &&  'Maria'); // Maria, retorna última checada
//Em Js tudo pode ser avaliado em true or false
/*
false -> valor literal falso
FALSY values
0
''
""
``
null / undefined
NaN
Tudo diferente disso é true
*/
console.log('Ronald' && 'Maria' && 1223 && 'R');//R
console.log('Ronald' && 'Maria' && NaN && 'R');//NaN

function falaOi() {
    return 'Oi';
}

let vaiExecutar = true;
console.log(vaiExecutar && falaOi()); //Oi

//let vaiExecutar;
//console.log(vaiExecutar && falaOi()); //undefined

vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falaOi()); //Oi

console.log(0 || false || null || 'Luiz Otávio' || true);// Luiz Otávio

let corUsuario = null;
//N necessita fazer if, se n escolher uma cor o padrão é preto
let corPadrao = corUsuario || 'preto';
console.log(corPadrao); //preto

/*PEGADINHA */
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
//false, pq false com '' é string

