/*En base al ejercicio anterior, crea un botón 
con el texto 'X' para cada uno de los p que 
hayas insertado y que si el usuario hace click 
en este botón eliminemos el parrafo asociado.*/

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
    let phrase = `El nombre ${element.name} tiene `;

    for (const country of element.country) {
      const percentage = (country.probability * 100); 
      phrase += `un ${percentage} de ser de ${country.country_id}, ` 
    }

    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);

    const p$$ = document.createElement('p');
    p$$.textContent = phrase;
    div$$.appendChild(p$$);

    const btnDelete$$ = document.createElement('button');
    btnDelete$$.innerHTML = 'X';
    div$$.appendChild(btnDelete$$);
    btnDelete$$.addEventListener('click', () => {
        deleteP(div$$);
    });  
};

const deleteP = (result$$) => {
    result$$.remove();
}

const btnSearch$$ = document.querySelector('button');
btnSearch$$.addEventListener('click', search);