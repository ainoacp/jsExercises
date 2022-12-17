/*Basandote en el siguiente html, añade un evento 
'focus' que ejecute un console.log con el valor 
del input.*/
document.body.querySelector('input').classList.add('.focusInput');
//document.body.querySelector('input').setAttribute('id', 'focusInput');

/*let focusInput = function(event) {
    //console.log(event)
}
document.getElementsById('focusInput').addEventListener("focus", focusInput);
console.log('esto es un evento focus', focusInput);*/

let focusInput = document.body.querySelector('.focusInput');
focusInput.addEventListener('focus', function (event) {
    console.log(event);
});


//no funciona el focus pq???
