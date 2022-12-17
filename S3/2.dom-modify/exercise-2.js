//Inserta dinamicamente en un html un div que contenga una p con javascript.

const div = document.createElement('div');
  div.classList.add('div2');
    const p = document.createElement('p1');
    p.classList.add('p1');
    div.appendChild(p)
    document.body.appendChild(div);
   
    //otra forma
/*const div = document.createElement('div');
div.classList.add('div2');
    div.innerHTML = `<p class="p1"></p>`;
    document.body.appendChild(div);*/

    //otra forma más pero hay que nombrar al body (body$$)
/*const body$$ = document.querySelector(body);
body$$.innerHTML=`<div class="div2">
                    <p class="p1"></p>
                  </div>`*/