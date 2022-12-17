/*Basandote en el ejercicio anterior. Crea un botón 
que elimine el último elemento de la lista.*/

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
        
        document.body.appendChild(countryList);
    }
    
    let deleteLastBtn = document.querySelector("button");
    deleteLastBtn.addEventListener("click", function () {
        let choosedDiv = document.querySelectorAll("div");
        choosedDiv[choosedDiv.length -1].remove();        
    });