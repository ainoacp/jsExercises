/*Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listCountries = document.createElement('ul');
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    let countryList = document.createElement('li');
    countryList.textContent = country;
    listCountries.appendChild(countryList);    
}
document.body.appendChild(listCountries);