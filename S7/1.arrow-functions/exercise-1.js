/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la 
función muestre por consola la suma de los dos parametros. */

const sumDefault = (a = 10, b = 5) => {
    return console.log(a + b);
};

//- Ejecuta esta función sin pasar ningún parametro
sumDefault(); //devuelve el valor por defectto
//- Ejecuta esta función pasando un solo parametro
sumDefault(5); //devuelve la suma del parámetro+b
//- Ejecuta esta función pasando dos parametros
sumDefault(85, 22); //devuelve la suma de los nuevos parámetros