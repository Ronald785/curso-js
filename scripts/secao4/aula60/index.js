//Funções recursivas 
//É uma função que se chamada de volta
//Preocupe-se com quando ela deve parar de se chamar de volta 
//Existe um determinado limite, pq ele vai achar q houve erro ou loop infinito

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);