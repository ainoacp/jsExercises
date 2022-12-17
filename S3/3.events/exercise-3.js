/*Basandote en el siguiente html, añade un evento 'input' 
que ejecute un console.log con el valor del input.*/

document.querySelector('input').classList.add('.focusInput');
/*document.body.querySelector('input').setAttribute('id', 'focusInput');

let eventInput = function(event) {
    //console.log(event)
}
document.getElementsById('eventInput').addEventListener("input", eventInput);
console.log('esto es un evento input', eventInput);*/

let valueInput = document.body.querySelector(".focusInput");
valueInput.addEventListener("input", function (event) {
  console.log(event);
});