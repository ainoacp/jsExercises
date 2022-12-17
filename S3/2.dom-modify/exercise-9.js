/*Basandote en el siguiente html y javascript,inserta p con el 
texto 'Voy dentro!', dentro de todos los div con la clase 
.fn-insert-here*/


const chooseDivs = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < chooseDivs.length; i++) {
    const divChoosed = chooseDivs[i];
    let pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!';
    divChoosed.appendChild(pInside);
}

