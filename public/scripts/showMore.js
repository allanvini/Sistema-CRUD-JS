document.getElementById('mostrar-mais-pj').addEventListener('click',async ()=>{
    clickCounter++;
    cardsData = await getAllPJ(6*clickCounter);
    renderCardsPJ(cardsContainerPJ,cardsData);
})

document.getElementById('mostrar-mais-pf').addEventListener('click',async ()=>{
    clickCounter++;
    cardsData = await getAllPF(6*clickCounter);
    renderCardsPF(cardsContainerPF,cardsData);
})