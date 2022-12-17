/*Basandote en el html siguiente, elimina el elemento 
que tenga la clase .fn-remove-me.*/

const deleteElement = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < deleteElement.length; i++) {
    const element = deleteElement[i];
    element.remove();
}