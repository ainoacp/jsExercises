/*Inserta dinamicamente en un html un div que 
contenga 6 p utilizando un loop con javascript.*/

const divSixP = document.createElement("div");
document.body.appendChild(divSixP);

for (let i = 0; i < 6; i++) {
  let sixP = document.createElement("p");
  divSixP.appendChild(sixP);
}
