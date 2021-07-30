//Fumção recebe altura e largura e retorna true
//se estiver no modo paisagem

//Normal
// function ePaisagem (largura, altura) {
//     return largura > altura;
//     //Se for maior retorna true
// };
//Arrow Function
const ePaisagem = (largura, altura) =>  largura > altura;
console.log(ePaisagem(1920, 1080));
