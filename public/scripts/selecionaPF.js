let PF = document.getElementById('PF');
let cardsContainerPF = document.getElementById('cards-container');

PF.addEventListener('click', async ()=>{

    cardsData = await getAllPF(6);


    renderCardsPF(cardsContainerPF,cardsData);

    this.PF.style.borderBottom = 'solid 2px blue';
    document.getElementById('PJ').style.border = 'none';

    document.getElementById('actions-pj').style.display = "none";
    document.getElementById('actions-pf').style.display = "grid";

})
