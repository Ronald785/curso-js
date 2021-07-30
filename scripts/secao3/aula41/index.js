//Escreva uam função que recebe 2 números e retorne o maior deles

function maior(n1, n2){
    if (n1 === n2) {
        return console.log(`Ambos valem ${n1}`);
    } else if (n1 > n2) {
        return console.log(`O maior valor é ${n1}`);
    } else {
        return console.log(`O maior valor é ${n2}`);
    }
};

const max = (n1, n2) => (n1 > n2 ? n1 : n2 > n1 ? n2 : 'Iguais');

console.log(max(500, 500));

maior(500, 500);
