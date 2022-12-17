/*Elimina el último elemento del array y muestra el primero y 
el último por consola.*/

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
RickAndMortyCharacters.pop();
console.log(RickAndMortyCharacters);

console.log(RickAndMortyCharacters[0]);
console.log(RickAndMortyCharacters[RickAndMortyCharacters.length-1]);
// o así
console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[RickAndMortyCharacters.length-1);
