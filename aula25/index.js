const numero = 10;

//Se (numero >= 0 $$ numero <= 5) ocorrer, faça isso {código}
//se não faça isso {código}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <=8){
    console.log('O número está entre 6 e 8.');
    // O cóidgo vai sair do condicional na primeira condição true
} else if (1 === 1) { //true
    console.log('LITERAL');
} else if (numero <= 9 && numero <= 11) { //true
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('Aqui vai o reso do código.')