/*Inserta dinamicamente con javascript en un html una p 
con el texto 'Soy dinámico!'.*/

const pPlusText = document.createElement("p");
pPlusText.textContent = 'Soy dinámico!';
document.body.appendChild(pPlusText);
