/*Añade un botón a tu html con el id btnToClick y en tu 
javascript añade el evento click que ejecute un console.log 
con la información del evento del click*/
 
const button = document.createElement('button');
  button.setAttribute('id', 'btnToClick');
  document.body.appendChild(button);
  //console.log(button);
  let buttonClick = function(event) {
    //console.log(event)
  }
  document.getElementById('btnToClick').addEventListener("click", buttonClick);
  console.log('esto es un evento click', buttonClick);