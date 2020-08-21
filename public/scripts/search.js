document.getElementById('search').addEventListener('click', async ()=>{
    if(document.getElementById('PJ').style.borderBottom == "2px solid blue"){
        let CNPJ, CPF, ANO, MODELO, MARCA;

        CNPJ = document.getElementById('cnpj-query').value;
        CPF = document.getElementById('cpf-query').value;
        ANO = document.getElementById('year-query').value;
        MODELO = document.getElementById('model-query').value;
        MARCA = document.getElementById('brand-query').value;

        cardsData = await getPJFiltered(CNPJ, CPF, ANO, MODELO, MARCA, 250); // @params CNPJ CPF ANO MODELO MARCA PAGE
        console.log(cardsData);

        renderCardsPJ(cardsContainerPJ, cardsData);

    } else if (document.getElementById('PF').style.borderBottom == "2px solid blue"){
        let CNPJ, CPF;

        CNPJ = document.getElementById('cnpj-query').value;
        CPF = document.getElementById('cpf-query').value;

        cardsData = await getPFByFilter(CPF,CNPJ);
        console.log(cardsData)
        renderCardsPF(cardsContainerPF, cardsData);
    }
})