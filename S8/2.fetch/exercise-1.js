/*Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' 
para hacer un .fetch() y recibir los datos que devuelve. 
Imprimelo mediante un console.log(). Para ello, es necesario 
que crees un .html y un .js.*/





const search = (event) => {
    const input$$ = document.querySelector ('input');

    fetch('https://api.agify.io?name=michael')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
};

const btnSearch$$ = document.querySelector('button');
btnSearch$$.addEventListener('click', search);
