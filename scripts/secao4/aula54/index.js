//Callback
//funções que são executadas quando uma ação ocorre

//Em web não sabemos o tempo que cada função irá demorar para ser executada

function rand(min = 1000, max = 3000) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return num;
}
//setTimeout para simular demora da requisição
function f1(callback) { //Callback
    setTimeout(function() {
        console.log("f1");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log("f3");
        if (callback) callback();
    }, rand());
}

// Ordem Aleatória
// f1();
// f2();
// f3();
// console.log("Olá mundo!");


//Ordem correta de execução, callback hell
/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log("Olá mundo!");
        });
    });
});
*/
// Solução para o código acima
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log("Olá mundo!");
}