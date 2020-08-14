function renderCardsPF(container, data){

    container.innerHTML = "";

    data.forEach(element => {

        console.log(element)


        ///////////////////////////////////////////////////////////////////////////

        let cardDescription = document.createElement('div');
            cardDescription.setAttribute('class','card-content')

            let CPF = document.createElement('div');
                CPF.setAttribute('style','display: flex;')
            
                let CPFTitle = document.createElement('p');
                    CPFTitle.setAttribute('style','font-weight: bold; margin-right: 5px;');
                    let CPFTitleText = document.createTextNode('CPF:');
                let CPFData = document.createElement('p');
                    CPFData.setAttribute('class', 'cpf');
                    let CPFDataText = document.createTextNode(element.pfData.dadosCadastrais.CPF);

                CPFTitle.appendChild(CPFTitleText);
                CPFData.appendChild(CPFDataText);

                CPF.appendChild(CPFTitle);
                CPF.appendChild(CPFData);

            cardDescription.appendChild(CPF);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

            let email = document.createElement('div');
                email.setAttribute('style','display: flex;');

                let emailTitle = document.createElement('p');
                    emailTitle.setAttribute('style','font-weight: bold; margin-right: 5px;');
                    let emailTitleText = document.createTextNode('E-mail:');
                    emailTitle.appendChild(emailTitleText);

                let emailData = document.createElement('p');
                    let emailDataText = document.createTextNode(element.pfData.dadosCadastrais.email)
                    emailData.appendChild(emailDataText);


                email.appendChild(emailTitle);
                email.appendChild(emailData);

            cardDescription.appendChild(email);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

            let telefoneFixo = document.createElement('div');
                telefoneFixo.setAttribute('style','display: flex;');

                let telefoneFixoTitle = document.createElement('p');
                    telefoneFixoTitle.setAttribute('style', 'font-weight: bold; margin-right: 5px;');
                    let telefoneFIxoTitleText = document.createTextNode('Telefone Fixo:');
                    telefoneFixoTitle.appendChild(telefoneFIxoTitleText);

                let telefoneFixoData = document.createElement('p');
                    let telefoneFixoDataText = document.createTextNode(element.pfData.endereco.enderecoAtual.telefoneFixo);
                    telefoneFixoData.appendChild(telefoneFixoDataText);

                telefoneFixo.appendChild(telefoneFixoTitle);
                telefoneFixo.appendChild(telefoneFixoData);

            cardDescription.appendChild(telefoneFixo);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////
            
            let celular = document.createElement('div');
            celular.setAttribute('style','display: flex;');

                let celularTitle = document.createElement('p');
                    celularTitle.setAttribute('style', 'font-weight: bold; margin-right: 5px;');
                    let celularTitleText = document.createTextNode('Celular:');
                    celularTitle.appendChild(celularTitleText);

                let celularData = document.createElement('p');
                    let celularDataText = document.createTextNode(element.pfData.endereco.enderecoAtual.celular);
                    celularData.appendChild(celularDataText);

                    celular.appendChild(celularTitle);
                    celular.appendChild(celularData);

            cardDescription.appendChild(celular);

            //////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardTitle = document.createElement('span');
            cardTitle.setAttribute('class', 'card-title');
            let cardTitleContent = document.createTextNode(element.pfData.dadosCadastrais.nomeCompleto);
            cardTitle.appendChild(cardTitleContent);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardDataContainer = document.createElement('div');
            cardDataContainer.setAttribute('class', 'card-content white-text');
            cardDataContainer.appendChild(cardTitle);
            cardDataContainer.appendChild(cardDescription);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardButtonVisualize = document.createElement('a');
            cardButtonVisualize.setAttribute('href', '#');
            let cardButtonVisualizeContent = document.createTextNode('Visualizar');
            cardButtonVisualize.appendChild(cardButtonVisualizeContent);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardActionButtonsContainer = document.createElement('div');
            cardActionButtonsContainer.setAttribute('class', 'card-action');
            cardActionButtonsContainer.setAttribute('style', 'display: grid; grid-template-columns: 12fr;');
            cardActionButtonsContainer.appendChild(cardButtonVisualize);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let card = document.createElement('div');
            card.setAttribute('class', 'card teal darken-1 hoverable');
            card.appendChild(cardDataContainer);
            card.appendChild(cardActionButtonsContainer);

            ///////////////////////////////////////////////////////////////////////////

        container.appendChild(card);
    })

    
    
}