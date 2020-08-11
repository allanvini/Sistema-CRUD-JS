let PJ = document.getElementById('PJ');
let cardsContainerPJ = document.getElementById('cards-container');

PJ.addEventListener('click', ()=>{

    this.PJ.style.borderBottom = 'solid 2px blue';
    document.getElementById('PF').style.border = 'none';

    document.getElementById('actions-pf').style.display = "none";
    document.getElementById('actions-pj').style.display = "grid";
})
