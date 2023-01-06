const getCat = async () => {
    const request = await fetch('https://api.thecatapi.com/v1/images/search');
    const response = await request.json();
    return response;
    console.log(response);
};

const addCat = async (cat) => {
    const {url,cats} = cat;    
    let response = await getCat(url);
    cats.push(response[0].url);    
    printCat(cat);
};

const printCat = (cat) => {
    const {content, cats} = cat;
    content.innerHTML = '';

    for (let i = 0; i < cats.length; i++) {
        const catImg = cats[i];
        
        const myCat = document.createElement('div');
        myCat.className = 'b-gallery__item';
        
        const catImage = document.createElement('img');
        catImage.src = catImg;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete!';

        myCat.appendChild(catImage);
        myCat.appendChild(deleteBtn);
        cat.content.appendChild(myCat);

        deleteBtn.addEventListener('click', () => deleteCat(cat, i));
    };  
};


const deleteCat = (cat, i) => { 
    const {cats} = cat;
    cats.splice(i, 1);
    printCat(cat);  
};

const init = async () => {
    const catList = await getCat();
    console.log(catList);

    const catDiv = document.createElement('div');
    catDiv.className = 'content';
    
    const searchBtn = document.createElement('button');
    searchBtn.textContent = 'Call a cat';

    const card = document.createElement('div');
    card.className = 'b-gallery';

    catDiv.appendChild(searchBtn);
    
    let content = document.querySelector('body');
    content.appendChild(catDiv);
    content.appendChild(card);

    const cat = {
        url: 'https://api.thecatapi.com/v1/images/search',
        content: catDiv,
        cats: catList,
    };
    console.log(cat);

    searchBtn.addEventListener('click', () => addCat(cat));

  };
  
init();