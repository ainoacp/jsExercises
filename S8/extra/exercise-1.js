const getDigimon = async () => {
  const request = await fetch('https://digimon-api.vercel.app/api/digimon');
  const response = await request.json();
  return response;
};

const printDigimons = (digimons) => {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';
    
    digimons?.forEach(digimon => {
        const card = document.createElement('div');
        card.className = 'card';
       
        const cardContent = `
          <img src="${digimon.img}" class='card-img'/>
          <div class="card-body">
            <h5 class="card-title">${digimon.name}</h5>
          </div>`; 
        
        card.innerHTML = cardContent;

        contentDiv.appendChild(card);
    });  
};

const init = async () => {
    const list = await getDigimon();
    console.log(list);
    printDigimons(list);
    console.log(list);
  };
  
init();