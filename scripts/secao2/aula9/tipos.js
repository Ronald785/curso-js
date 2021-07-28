//String, number, undefined, null, boolean, symbol
const nome1 = 'Ronald'; //String
const nome2 = "Ronald"; //String
const nome3 = `Ronald`; //String
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta nenhum loca na memória (padrão do sistema)
const sobrenomeALuno = null; //Nulo -> não aponta nenhum loca na memória
const boolean = true; // Boolean = true ou false (valor lógico)
//Pelo console o tipo de null é objeto 

//Tipo de dado passado por referencia
//Ambos apontam para o mesmo local na mémoria
const a = [1, 2];
const b = a;
console.log(a, b);
b.push(3);
console.log(a, b);
//O valor 3 é adicionado em b e em a

let c = 2;
const d = c;
//resultado 2 2
console.log(c, d);
c = 3;
//resultado 3 2
console.log(c, d);