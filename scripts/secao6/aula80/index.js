//Objeto Map()

const pessoas = [
    { id: 3, nome: 'Ronald '},
    { id: 2, nome: 'Maria '},
    { id: 1, nome: 'Helena '},
];

/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
}
console.log(novasPessoas);
{
  '1': { id: 1, nome: 'Helena ' },
  '2': { id: 2, nome: 'Maria ' },
  '3': { id: 3, nome: 'Ronald ' }
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
//novasPessoas.delete(2) -> Apaga chave 2
/*
Map(3) { --Mantém ordem e continua sedo Number
  3 => { id: 3, nome: 'Ronald ' },
  2 => { id: 2, nome: 'Maria ' },
  1 => { id: 1, nome: 'Helena ' }
}
*/
console.log(novasPessoas);
console.log(novasPessoas.get(2)); //{ id: 2, nome: 'Maria ' }

            //destructor
for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}
/*
3 3 Ronald 
2 2 Maria 
1 1 Helena 
 */
                    //novasPessoas.values() -> Pega o valor, novasPessoas.keys() -> chaves
for (const pessoas of novasPessoas) {
    console.log(pessoas);
}
/*
[ 3, { id: 3, nome: 'Ronald ' } ]
[ 2, { id: 2, nome: 'Maria ' } ]
[ 1, { id: 1, nome: 'Helena ' } ]
*/
