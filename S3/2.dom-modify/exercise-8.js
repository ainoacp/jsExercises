/*Basandote en el siguiente html,inserta una p con el texto 
'Voy en medio!' entre los dos div. Recuerda que no solo puedes 
insertar elementos con .appendChild.*/

const pInTheMiddle = document.createElement('p');
pInTheMiddle.textContent = 'Voy en el medio!';

let positionDivs = document.querySelectorAll('div');

document.body.insertBefore(pInTheMiddle, positionDivs[1]);

// OTRA FORMA
/* const pInTheMiddle = document.createElement('p');
pInTheMiddle.textContent = 'Voy en el medio!';
let positionDivs = document.querySelectorAll('div');
i = 0;
i = Match.round((positionDivs.lenght)/2); //Math.truc para que lo redonde
document.body.insertBefore(pInTheMiddle, positionDivs[1]);