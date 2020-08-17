function visualizePJ (pos){


    let nome = document.getElementById('titulo-pj-view');
        let nomeText = document.createTextNode(cardsData[pos].pjData.dadosCadastrais.razaoSocial);
        nome.appendChild(nomeText);
        

    let cpfContainer = document.getElementById('cpf-pego-view');
    let cpfs = cardsData[pos].pjData.dadosCadastrais.CPF;


    document.getElementById('modal-visualizacao-PJ').style.display = "block";
    document.getElementById('pj-view').style.display = "block";


    document.getElementById('razao-social-pj-view').value = cardsData[pos].pjData.dadosCadastrais.razaoSocial;
    document.getElementById('cnpj-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.CNPJ;
    document.getElementById('email-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.email;

    renderCpfPJView(cpfContainer,cpfs,pos);

    document.getElementById('data-abertura-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.dataAbertura;
    document.getElementById('capital-social-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.capitalSocial;
    document.getElementById('numero-funcionarios-registrados-view').value = cardsData[pos].pjData.dadosCadastrais.numeroFuncionariosRegistrados;
    document.getElementById('telefone-fixo-pj-view').value = cardsData[pos].pjData.dadosCadastrais.telefoneFixo;
    document.getElementById('cep-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.CEP;
    document.getElementById('cidade-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.cidade;
    document.getElementById('rua-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.rua;
    document.getElementById('bairro-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.bairro;
    document.getElementById('numero-empresa-view').value = cardsData[pos].pjData.dadosCadastrais.numero;

    document.getElementById('banco-empresa-view').value = cardsData[pos].pjData.dadosBancarios.banco;
    document.getElementById('agencia-empresa-view').value = cardsData[pos].pjData.dadosBancarios.agencia;
    document.getElementById('numero-conta-empresa-view').value = cardsData[pos].pjData.dadosBancarios.conta.numero;
    document.getElementById('digito-conta-empresa-view').value = cardsData[pos].pjData.dadosBancarios.conta.digito;
    document.getElementById('tempo-conta-empresa-view').value = cardsData[pos].pjData.dadosBancarios.tempoConta;
    document.getElementById('telefone-agencia-empresa-view').value = cardsData[pos].pjData.dadosBancarios.telefoneAgencia;

    document.getElementById('porcentagem-socio-majoritario-empresa-view').value = cardsData[pos].pjData.socios.porcentagemSocioMajoritario;
    document.getElementById('porcentagem-demais-socios-empresa-view').value = cardsData[pos].pjData.socios.porcentagemDemaisSocios;
    let socioMajoritario;
    if (cardsData[pos].pjData.socios.socioMajoritarioAssinaSozinho){
        socioMajoritario = "Sim";
        document.getElementById('socio-assina-sim-view').checked = true;
        document.getElementById('socio-assina-nao-view').checked = false;
    } else {
        socioMajoritario = "Não";
        document.getElementById('socio-assina-sim-view').checked = false;
        document.getElementById('socio-assina-nao-view').checked = true;
    }

    document.getElementById('nome-contador-empresa-view').value = cardsData[pos].pjData.contador.nome;
    document.getElementById('escritorio-contador-empresa-view').value = cardsData[pos].pjData.contador.escritorio;
    document.getElementById('telefone-fixo-contador-empresa-view').value = cardsData[pos].pjData.contador.telefoneFixo;
    document.getElementById('celular-contador-empresa-view').value = cardsData[pos].pjData.contador.celular;


    






    


    


}

function deleteCpfPJView (pos,index){
    cardsData[index].pjData.dadosCadastrais.CPF.splice(pos,1);
    renderCpfPJView(document.getElementById('cpf-pego-view'), cardsData[index].pjData.dadosCadastrais.CPF);
}

function renderCpfPJView (container, data,index){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');

        let content = document.createTextNode(element);

        let pos = cardsData[index].pjData.dadosCadastrais.CPF.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteCpfPJView(${pos},${index})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}