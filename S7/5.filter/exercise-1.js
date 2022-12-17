/*Dado el siguiente array, utiliza .filter() para generar un 
nuevo array con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adult = ages.filter(function (years) {
    return years >= 18;
});

console.log(adult);