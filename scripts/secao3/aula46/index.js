//Funções para controlar timer

function mostrarHora() {
    const data = new Date();

    return data.toLocaleString('pt-BR', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });
}

// function funcaDoInterval() {
//     console.log(mostrarHora());
// }

          //Passar referencia //executar uma função precisa do ()
// setInterval(funcaDoInterval, 1000);
//Vai configurar um intervalo de tempo 
//Para uma função ser executada em determinado momento

            //Com funcao anonima
const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000);
//Sé executa uma vez
//Para de executar após 3 segundos
setTimeout(function() {
    clearInterval(timer);
},3000);

setTimeout(function() {
    console.log('Olá mundo!')
},5000);