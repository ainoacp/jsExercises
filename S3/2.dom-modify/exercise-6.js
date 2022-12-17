/*Basandote en el siguiente array crea una lista ul > li con 
los textos del array y metelo en el html.*/

const apps = ['Facebook', 'Netflix', 
'Instagram', 'Snapchat', 'Twitter'];

const listApps = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    let itemList = document.createElement('li');
    itemList.textContent = app;
    listApps.appendChild(itemList);    
}
document.body.appendChild(listApps);