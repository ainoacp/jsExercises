/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade 
la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con 
un console.log.*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

let isApproved = [];
for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    let approvedCount = 0;
    //if (alumn.T1 === true && alumn.T2 === true && alumn.T3 === true) {
      //  approvedCount += 3;
    //} else 
    
    if (alumn.T1 === true){
        approvedCount += 1;
    } else {
        approvedCount;
    }

    if (alumn.T2 === true){
        approvedCount += 1;
    } else {
        approvedCount;
    }

    if (alumn.T3 === true){
        approvedCount += 1;
    } else {
        approvedCount;
    }

     /*approvedCount = alumn.T1 ? approvedCount += 1 :  approvedCount;
    approvedCount = alumn.T2 ? approvedCount += 1 :  approvedCount;
    approvedCount = alumn.T3 ? approvedCount += 1 :  approvedCount;*/
    
     console.log(approvedCount);   
    
     if (approvedCount >= 2){
        isApproved.push(alumn);
    }
}
console.log(isApproved);
 

