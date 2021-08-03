//Closures

function retornaFuncao(nome) {
    return function() {
        //Closure, habilitada da funcao em acessar/lembrar seu escopo léxico
        //Recebe esse nome pq quando executada ela fecha o escopo
        return nome; 
    };
}

const funcao = retornaFuncao('Ronald');
const funcao2 = retornaFuncao('João');


console.dir(funcao); //log com vantagens //Acesso a 3 escopos, ela, pai e o global
console.dir(funcao2); //[Function (anonymous)]

console.log(funcao(), funcao2());//Ronald João