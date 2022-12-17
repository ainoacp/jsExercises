/*Usa un forin para imprimir por consola los datos del alienigena.*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
 
for (const prop in alien) {
    //console.log(prop);
    console.log('El alien tiene ' + prop + ' con valor: ' + alien[prop]);
 }

 