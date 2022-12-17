/*Crea una función llamada `findArrayIndex` que reciba como 
parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual 
al valor del texto que enviaste como parametro.
Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array:
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']*/

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        const elementArray = array[i];
        if (elementArray === text) {
            return i;
        }
    }
}
const placesToLive = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Miami');
console.log(placesToLive);
const placesToLive2 = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Bali');
console.log(placesToLive2);
const placesToLive3 = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Sidney');
console.log(placesToLive3);
const placesToLive4 = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Nueva York');
console.log(placesToLive4);
const placesToLive5 = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Florida');
console.log(placesToLive5);