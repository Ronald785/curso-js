//Map - Mapeando o Array 
//Map -> altera valores do array
//map(callbacK (valor, índice, array))
//Map true -> Altera o valor 
//Map sempre tem o mesmo tamanhao do array original
//Cuidado pode modificar o array original
//Filter n altera o array original 

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(valor => valor*2);

console.log(dobro);

//Para cada elemento: 
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const string = pessoas.map(obj => obj.nome);
const removeNome = pessoas.map(obj => ({idade: obj.idade}));
//{
//     delete obj.nome; 
//     return obj;
// }
const adcionaId = pessoas.map((obj, indice) => { 
    newObj = {...obj} // copiando o obj para modficar o orginal
    newObj.id = indice
    return newObj;
});

console.log(string);
console.log(removeNome);
console.log(adcionaId);
console.log(pessoas);