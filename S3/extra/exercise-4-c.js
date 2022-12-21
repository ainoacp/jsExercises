/*Basandote en el ejercicio anterior. Crea un botón 
para cada uno de los elementos de las listas que 
elimine ese mismo elemento del html.*/

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
    
    
    //document.body.querySelectorAll('button').classList.add('deleteLAst');

    

    for (const country of countries) {
        let countryList = document.createElement("div");
        countryList.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;
        
        //button.classList.add('deleteLast');
        /*deleteLast.addEventListener('click', function () {
            countryList.remove();
        });*/
        /*let deleteLast = function (clickToDelete) {
            document.querySelectorAll('button').addEventListener("click", clickToDelete);
            console.log(clickToDelete);}*/

        /*deleteLastBtn = function (clickToDelete) {
            document.querySelector('.deleteleButton').addEventListener("click", clickToDelete);
        }*/
        let deleteLastBtn = document.createElement("button");
        deleteLastBtn.classList.add('deleteButton');
        deleteLastBtn.textContent = "Click para borrar";
        
        document.body.appendChild(deleteLastBtn);
        deleteLastBtn.addEventListener("click", function() {
            countryList.remove();
        });
        document.body.appendChild(countryList);
        console.log(countryList);
    };
    