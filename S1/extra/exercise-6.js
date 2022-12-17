/*Usa un bucle para recorrer el array de peliculas (`products`) y añade al array `goodProducts` 
los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.*/

let goodProducts = [];
let badProducts = [];

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];


    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.sellCount < 20) {
            //console.log(products.sellCount);
            badProducts.push(product);
            //console.log(product);
        } else {
            goodProducts.push(product);
           // console.log(product);
        }
    }
    
    console.log(badProducts);
    console.log(goodProducts);
        