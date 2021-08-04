//Revisão do básico em Arrays 

//Array -> são indexados e tem valor por referência

//const nomes = ['Eduardo', 'Maria', 'Joana']; //array literal

//Criando com construtor -> Serve para criar Array, String, Objetos, Funções, Números
const nomes = new Array('Eduardo', 'Maria', 'Joana');

//const novo = nomes; //O q fazer em um interfere no outro 
//novo.pop(); //elimna o último elemento
//nomes.shift() //remove o primeiro elemento e move os indices
//nomes.push() //adiciona no final do array
//nomes.unshift() //adiciona o elemento no primeiro indice e move os outros
//nomes.slice()//fatiar os elementos do array // (1, 3)->1º onde começa e 2º termina, último Ñ incluído
//nomes.lentgh -> tamanho do array //lentgh é um atribudo (n usa "()")

//COPIANDO ARRAY
const novo = [...nomes]; //rest operator

nomes[2] = 'João';
//delete -> remove elemente do array sem alterar indice
delete nomes[2];
console.log(nomes); //[ 'Eduardo', 'Maria', <1 empty item> ]


//Convertendo string em array
const meuNome = 'Ronald Mateus Jesus Florencio de Almeida';
const arrayNome = meuNome.split(' '); 
console.log(arrayNome); //[ 'Ronald', 'Mateus', 'Jesus', 'Florencio', 'de', 'Almeida' ]

//Convertendo array em String
const stringNome = arrayNome.join(' '); 
console.log(stringNome);//Ronald Mateus Jesus Florencio de Almeida