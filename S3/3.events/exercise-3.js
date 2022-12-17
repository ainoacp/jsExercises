/*Basandote en el siguiente html, añade un evento 'input' 
que ejecute un console.log con el valor del input.*/

document.querySelector('input').classList.add('.focusInput');
/*document.body.querySelector('input').setAttribute('id', 'focusInput');

let eventInput = function(event) {
    //console.log(event)
}
document.getElementsById('eventInput').addEventListener("input", eventInput);
console.log('esto es un evento input', eventInput);*/
const muestraValor = (event) => console.log(event);
const valueInput = document.body.querySelector(".focusInput");
valueInput.addEventListener('input', () => muestraValor (focusInput.value));