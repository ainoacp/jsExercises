/*En base al ejercicio anterior. Crea dinamicamente un 
elemento <p> por cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y 
un 6 porciento de ser de MZ.*/


const search = (event) => {
    const input$$ = document.querySelector ('input');

    fetch("https://api.nationalize.io" + '?name=' + input$$.value)
      .then((response) => {
        return response.json();
      })
      .then((element) => {
        createP(element);
      });
};

const createP = (element) => {
    const p$$ = document.createElement('p');
    let phrase = `El nombre ${element.name} tiene `;

    for (const country of element.country) {
      const percentage = (country.probability * 100); 
      phrase += `un ${percentage} de ser de ${country.country_id}, ` 
    }

    p$$.textContent = phrase;
    document.body.appendChild(p$$);
}

const btnSearch$$ = document.querySelector('button');
btnSearch$$.addEventListener('click', search);
