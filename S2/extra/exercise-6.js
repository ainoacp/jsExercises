/*Crea una función llamada ``swap`` que reciba un array y dos parametros 
que sean indices del array. La función deberá intercambiar la posición 
de los valores de los indices que hayamos enviado como parametro. Retorna 
el array resultante.
Sugerencia de array:*/

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (array, index1, index2) => {
    const element = array[index1];
    array[index1] = array[index2];
    array[index2] = element;
    return array;
}

const arrayFunction = swap(array, 2, 0);
console.log(arrayFunction);
const arrayFunction1 = swap(array, 0, 3);
console.log(arrayFunction1);
const arrayFunction2 = swap(array, 1, 2);
console.log(arrayFunction2);
const arrayFunction3 = swap(array, 3, 1);
console.log(arrayFunction3);