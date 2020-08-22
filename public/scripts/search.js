document.getElementById('search').addEventListener('click', async ()=>{
    if(document.getElementById('PJ').style.borderBottom == "2px solid blue"){
        let CNPJ, CPF, ANO, MODELO, MARCA;

        CNPJ = document.getElementById('cnpj-query').value;
        CPF = document.getElementById('cpf-query').value;
        ANO = document.getElementById('year-query').value;
        MODELO = document.getElementById('model-query').value;
        MARCA = document.getElementById('brand-query').value;

        if (CNPJ === "" && CPF === "" && MODELO === "" && MARCA === ""){
            cardsData = await getAllPJ(6);
            renderCardsPJ(cardsContainerPJ, cardsData);
        } else {
            cardsData = await getPJFiltered(CNPJ, CPF, ANO, MODELO, MARCA, 250); // @params CNPJ CPF ANO MODELO MARCA PAGE
            renderCardsPJ(cardsContainerPJ, cardsData);
        }

    } else if (document.getElementById('PF').style.borderBottom == "2px solid blue"){
        let CNPJ, CPF;

        CNPJ = document.getElementById('cnpj-query').value;
        CPF = document.getElementById('cpf-query').value;

        if(CNPJ == "" && CPF == ""){
            cardsData = await getAllPF(6);
            renderCardsPF(cardsContainerPF,cardsData);
        } else {
            cardsData = await getPFByFilter(CPF,CNPJ);
            renderCardsPF(cardsContainerPF, cardsData);
        }
        
    }
})