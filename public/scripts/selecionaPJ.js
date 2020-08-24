let PJ = document.getElementById('PJ');
let cardsContainerPJ = document.getElementById('cards-container');

PJ.addEventListener('click', async ()=>{
    clickCounter = 1;

    cardsData = await getAllPJ(6);

    renderCardsPJ(cardsContainerPJ,cardsData);

    this.PJ.style.borderBottom = 'solid 2px blue';
    document.getElementById('PF').style.border = 'none';

    document.getElementById('actions-pf').style.display = "none";
    document.getElementById('actions-pj').style.display = "grid";

    /*
    document.getElementById('year-query').removeAttribute('disabled');
    document.getElementById('model-query').removeAttribute('disabled');
    document.getElementById('brand-query').removeAttribute('disabled');
    */
})
