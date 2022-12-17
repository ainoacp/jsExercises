/*En base al siguiente javascript, crea variables en base a las 
propiedades del objeto usando object destructuring e imprimelas 
por consola. Cuidado, no hace falta hacer destructuring del array, 
solo del objeto.*/

const game = {title: 'The last us 2', 
              gender: ['action', 'zombie', 'survival'], 
              year: 2020}

const gameTitle = game.title;
console.log(gameTitle);
const gameGender = game.gender; 
console.log(gameGender);
const gameYear = game.year;
console.log(gameYear);