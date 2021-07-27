//FUNÇÕES
//Elas executam uma ação
//O que geralemente queremo é mandar um valor e pegar um valor de volta

//Dessa forma, não precisa de ponto e vírgula no fim
// function saudacao(nome) {
//     console.log(`Oi, ${nome}`);
// }
//Sem espeficicar o que a funcao deve retornar o padrão é undefined
// const variavel = saudacao('Ronald');
// console.log(variavel); //undefined

// function saudacao(nome) {
//     return `Oi, ${nome}!`;
// }
// const variavel = saudacao('Ronald');
// console.log(variavel); //Oi, ROnald

//O conteúdo dentro da função está protegido
//Apartir do momento que o interpretador encontra o return encerra função
//ou sej,a n le nada abaixo
//param = defin um valor padrão se n for passado nada
//Declaração clássica
// function soma(x=0, y=0){
//     const resultado = x + y;
//     return resultado;
// }
// const resultado = soma();//soma() e exibi retorna NaN
// console.log(resultado); //4

//Função anonima é criar um funcao dentro de uma variavel
//Obrigatório terminar com ;
// const raiz = function(n) {
//     return n ** 0.5;
// };
// console.log(raiz(9))

//Array function, moderna
//mesma com anteriro remove function e subs por =>
/*
const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9))
 */

//Simplificando
//Com só um param pode eliminar paranteses 
//e uma linha pode ser sem chevaes
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
