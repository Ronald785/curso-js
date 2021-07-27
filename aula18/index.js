//É possível alterar os valores do array no const
//Mas não reatribuir o array
const array = [1,2,3];
array.push(4);
array[0] = 'Ronald';
console.log(array);