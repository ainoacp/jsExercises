/*Dado el siguiente array, usa .find() 
para encontrar el número 100.*/

const numbers = [32, 21, 63, 95, 100, 67, 43];

const found = numbers.find(function(element) { return element === 100});
console.log(found);
