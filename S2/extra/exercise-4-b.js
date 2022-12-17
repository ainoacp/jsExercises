/*Usando la función anterior beneficiate de poder conocer el indice del 
array para crear una función llamada `removeItem` que pasandole un array 
y un texto como parametros (los mismos parametros que en el anterior 
ejercicio) llame a la función anteriormente creada ``findArrayIndex`` y 
obten el indice para posteriormente usar la función de javascript 
``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        const elementArray = array[i];
        if (elementArray === text) {
            return i;
        }
    }
}

const placesToLive = findArrayIndex(['Sidney', 'Bali', 'Malta', 'Florida', 'Tenerife'], 'Miami');
//console.log(placesToLive);

const removeItem(array, text) => {
    function findArrayIndex (array, text){
       //console.log(placesToLive); 
    }
    return findArrayIndex;
    console.log(findArrayIndex);        
}

// falta eliminar con la función .slice()