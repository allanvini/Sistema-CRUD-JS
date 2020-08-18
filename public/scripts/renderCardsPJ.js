function renderCardsPJ(container, data){

    container.innerHTML = "";

    data.forEach(element => {

        ///////////////////////////////////////////////////////////////////////////


        let cardDescription = document.createElement('div');
            cardDescription.setAttribute('class','card-content')

            let CNPJ = document.createElement('div');
                CNPJ.setAttribute('style','display: flex;')
                
                let CNPJTitle = document.createElement('p');
                    CNPJTitle.setAttribute('style','font-weight: bold; margin-right: 5px;');
                    let CNPJTitleText = document.createTextNode('CNPJ:');
                let CNPJData = document.createElement('p');
                    CNPJData.setAttribute('class', 'cnpj');
                    let CNPJDataText = document.createTextNode(element.pjData.dadosCadastrais.CNPJ);

                CNPJTitle.appendChild(CNPJTitleText);
                CNPJData.appendChild(CNPJDataText);

                CNPJ.appendChild(CNPJTitle);
                CNPJ.appendChild(CNPJData);

            cardDescription.appendChild(CNPJ);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

            let email = document.createElement('div');
                email.setAttribute('style','display: flex;');

                let emailTitle = document.createElement('p');
                    emailTitle.setAttribute('style','font-weight: bold; margin-right: 5px;');
                    let emailTitleText = document.createTextNode('E-mail:');
                    emailTitle.appendChild(emailTitleText);

                let emailData = document.createElement('p');
                    let emailDataText = document.createTextNode(element.pjData.dadosCadastrais.email)
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
                    let telefoneFixoDataText = document.createTextNode(element.pjData.dadosCadastrais.telefoneFixo);
                    telefoneFixoData.appendChild(telefoneFixoDataText);

                telefoneFixo.appendChild(telefoneFixoTitle);
                telefoneFixo.appendChild(telefoneFixoData);

            cardDescription.appendChild(telefoneFixo);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardTitle = document.createElement('span');
            cardTitle.setAttribute('class', 'card-title');
            let cardTitleContent = document.createTextNode(element.pjData.dadosCadastrais.razaoSocial);
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

            let pos = data.indexOf(element);
            cardButtonVisualize.setAttribute('onclick', `visualizePJ(${pos})`);

            ///////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////

        let cardActionButtonsContainer = document.createElement('div');
            cardActionButtonsContainer.setAttribute('class', 'card-action');
            //cardActionButtonsContainer.setAttribute('style', 'display: grid; grid-template-columns: 12fr;');
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
