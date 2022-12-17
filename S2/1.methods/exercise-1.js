/*Haz un bucle y muestra por consola todos aquellos valores del array 
que incluyan la palabra "Camiseta". Usa la función .includes de 
javascript.*/


const products = ['Camiseta de Pokemon', 
                  'Pantalón coquinero', 
                  'Gorra de gansta', 
                  'Camiseta de Basket', 
                  'Cinrurón de Orión', 
                  'AC/DC Camiseta']

    let includeCamiseta = [];

    for (let i = 0; i < products.length; i++) {
       const product = products[i];
       if (product.includes('Camiseta') == true){
        includeCamiseta.push(product);
       }
    }
    console.log(includeCamiseta);