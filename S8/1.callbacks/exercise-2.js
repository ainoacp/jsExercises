/*Usa el siguiente código como base y crea 3 funciones 
llamadas father, confirmExample, promptExample. La función
confirmExample recibirá una variable de tipo string (description) 
que mostrará como titulo de la ventana y retornará el valor 
del confirm. La función promptExample hará lo mismo pero con 
un prompt. La función father recibirá como parámetros description, 
con el valor del titulo de las ventanas y una función callback 
(confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como 
callback y añadir el valor resultado que retorne la función 
al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un 
console.log de userAnwsers*/

const userAnwsers = [];
//const confirmValue = confirm('');
//const propmt = prompt('');

function confirmExample(description){
    return confirm(description)
}
function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    return callback(description)
}

console.log(father('Me llamo Sergio', promptExample));
for (answer of userAnwsers) {
    userAnwsers.push(callback(description));
}

console.log(userAnwsers);

//no me sale