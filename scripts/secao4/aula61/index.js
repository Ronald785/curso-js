//Funções Geradores
//Lazy evaluation: avaliação preguiçosa -> 
//Tem recurso quase de pausar o código em determinado local
//Nunca entrega todos os valores de uma vez
// Ex: ela precisa entregar 3 valores na primeira chamda entrega o 1º na 2º chamada o 2º
//Até terminar
//Em yield pode ser qualquer coisa array, objeto, função...

function* geradora1() {
    //Código qualquel ...
    yield 'Valor1';
    //Código qualquel ...
    yield 'Valor2';
    //Código qualquel ...
    yield 'Valor3';
}

const g1 = geradora1();

// console.log(g1);//Object [Generator] {}
//Para ver valor usar .next()
                                            //indica se terminou ou n
// console.log(g1.next());//{ value: 'Valor1', done: false }
// console.log(g1.next().value);//Valor2
// console.log(g1.next());//{ value: 'Valor3', done: false }
// console.log(g1.next());//{ value: undefined, done: true }

for (let valor of g1) {
    console.log(valor); // Valor1, valor2, valor3
}

//Gerador infinito

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);//0
console.log(g2.next().value);//1
console.log(g2.next().value);//2
console.log(g2.next().value);//3
console.log(g2.next().value);//4
console.log(g2.next().value);//5
console.log(g2.next().value);//6
console.log(g2.next().value);//7

console.log('########################################')

//Gerador que delega tarefa para outro gerador 
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;

}

//Delegando parte do serviço da geradora 4 para a 3
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for (let valor of g4){
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    //retorna o valor e faz a função terminar
    return function() {
        console.log('VIm do return');
    };
    //................................................................

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();//VIm do y1
func2();//Vim do return

