/*Basandote en el siguiente html, elimina todos los nodos que 
tengan la clase .fn-remove-me*/

const deleteNodos = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < deleteNodos.length; i++) {
    const nodo = deleteNodos[i];
    nodo.remove();
}