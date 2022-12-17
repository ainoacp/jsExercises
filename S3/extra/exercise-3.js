/*Dado el siguiente html y javascript. Utiliza el array para 
crear dinamicamente una lista ul > li de elementos en el div 
de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];            

const listCars = document.createElement('ul');
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    let carsList = document.createElement('li');
    carsList.textContent = car;
    listCars.appendChild(carsList);    
}
body.div.appendChild(listCars);