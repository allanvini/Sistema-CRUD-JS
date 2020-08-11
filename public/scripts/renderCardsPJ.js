function renderCardsPJ(container, data){

    container.innerHTML = "";
    /**
     * HTML Template
     * 
      <div class="card teal darken-1 hoverable">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action" style="display: grid; grid-template-columns: 6fr 6fr; grid-gap: 5px;">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
     */
    data.forEach(element => {
        let cardDescription = document.createElement('p');
            let cardDescriptionContent = document.createTextNode(`CNPJ: ${element.pjData.dadosCadastrais.CNPJ} Email: ${element.pjData.dadosCadastrais.email}`);
            cardDescription.appendChild(cardDescriptionContent);

        let cardTitle = document.createElement('span');
            cardTitle.setAttribute('class', 'card-title');
            let cardTitleContent = document.createTextNode(element.pjData.dadosCadastrais.razaoSocial);
            cardTitle.appendChild(cardTitleContent);

        let cardDataContainer = document.createElement('div');
            cardDataContainer.setAttribute('class', 'card-content white-text');
            cardDataContainer.appendChild(cardTitle);
            cardDataContainer.appendChild(cardDescription);

        let cardButtonVisualize = document.createElement('a');
            cardButtonVisualize.setAttribute('href', '#');
            let cardButtonVisualizeContent = document.createTextNode('Visualizar');
            cardButtonVisualize.appendChild(cardButtonVisualizeContent);

        let cardButtonEdit = document.createElement('a');
            cardButtonEdit.setAttribute('href', '#');
            let cardButtonEditContent = document.createTextNode('Editar');
            cardButtonEdit.appendChild(cardButtonEditContent);

        let cardButtonPrint = document.createElement('a');
            cardButtonPrint.setAttribute('href', '#');
            let cardButtonPrintContent = document.createTextNode('Imprimir');
            cardButtonPrint.appendChild(cardButtonPrintContent);

        let cardButtonExclude = document.createElement('a');
            cardButtonExclude.setAttribute('href', '#');
            let cardButtonExcludeContent = document.createTextNode('Excluir');
            cardButtonExclude.appendChild(cardButtonExcludeContent);

        let cardActionButtonsContainer = document.createElement('div');
            cardActionButtonsContainer.setAttribute('class', 'card-action');
            cardActionButtonsContainer.setAttribute('style', 'display: grid; grid-template-columns: 6fr 6fr; grid-gap: 5px;');
            cardActionButtonsContainer.appendChild(cardButtonVisualize);
            cardActionButtonsContainer.appendChild(cardButtonEdit);
            cardActionButtonsContainer.appendChild(cardButtonPrint);
            cardActionButtonsContainer.appendChild(cardButtonExclude);
        

        let card = document.createElement('div');
            card.setAttribute('class', 'card teal darken-1 hoverable');
            card.appendChild(cardDataContainer);
            card.appendChild(cardActionButtonsContainer);

        container.appendChild(card);
    })

    
    
}