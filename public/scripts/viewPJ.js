let cpfContainerViewPJ = document.getElementById('cpf-pego-view');
let faturamentoContainerViewPJ = document.getElementById('faturamento-pego-view');
let empresaAtualContainerViewPJ = document.getElementById('empresas-atuais-pego-pj-view');
let empresaAnteriorContainerViewPJ = document.getElementById('empresas-anterior-pego-pj-view');
let empresaFuturaContainerViewPJ = document.getElementById('empresas-futura-pego-pj-view');
let frotaVeiculoContainerViewPJ = document.getElementById('veiculos-frota-pego-pj-view');
let referenciaComercialContainerViewPJ = document.getElementById('referencia-comercial-pego-pj-view');

let cpfViewPJ = [];
let faturamentosAtuaisViewPJ = [];
let empresasAtuaisViewPJ = [];
let empresasAnterioresViewPJ = [];
let empresasFuturasViewPJ = [];
let frotaVeiculosViewPJ = [];
let referenciasComerciaisViewPJ = [];
let socioMajoritarioViewPJ = [];

let veiculoFrotaQuitadoViewPJ;



function visualizePJ (pos){

    document.getElementById('app').style.display = 'none';

    let PJAtual = cardsData[pos];


    let nome = document.getElementById('titulo-pj-view');
        let nomeText = document.createTextNode(PJAtual.pjData.dadosCadastrais.razaoSocial);
        nome.appendChild(nomeText);

    cpfViewPJ = PJAtual.pjData.dadosCadastrais.CPF;
    faturamentosAtuaisViewPJ = PJAtual.pjData.faturamento;
    empresasAtuaisViewPJ = PJAtual.pjData.ondePrestaServicos.empresasAtuais;
    empresasAnterioresViewPJ = PJAtual.pjData.ondePrestaServicos.empresasAnteriores;
    empresasFuturasViewPJ = PJAtual.pjData.ondePrestaServicos.empresasFuturas;
    frotaVeiculosViewPJ = PJAtual.pjData.frotaDeVeiculos;
    referenciasComerciaisViewPJ = PJAtual.pjData.referenciasComerciais;


    document.getElementById('modal-visualizacao-PJ').style.display = "block";
    document.getElementById('pj-view').style.display = "block";


    document.getElementById('razao-social-pj-view').value = PJAtual.pjData.dadosCadastrais.razaoSocial;
    document.getElementById('cnpj-empresa-view').value = PJAtual.pjData.dadosCadastrais.CNPJ;
    document.getElementById('email-empresa-view').value = PJAtual.pjData.dadosCadastrais.email;

    renderCpfPJView(cpfContainerViewPJ,cpfViewPJ);


    document.getElementById('data-abertura-empresa-view').value = PJAtual.pjData.dadosCadastrais.dataAbertura;
    document.getElementById('capital-social-empresa-view').value = PJAtual.pjData.dadosCadastrais.capitalSocial;
    document.getElementById('numero-funcionarios-registrados-view').value = PJAtual.pjData.dadosCadastrais.numeroFuncionariosRegistrados;
    document.getElementById('telefone-fixo-pj-view').value = PJAtual.pjData.dadosCadastrais.telefoneFixo;
    document.getElementById('cep-empresa-view').value = PJAtual.pjData.dadosCadastrais.CEP;
    document.getElementById('cidade-empresa-view').value = PJAtual.pjData.dadosCadastrais.cidade;
    document.getElementById('rua-empresa-view').value = PJAtual.pjData.dadosCadastrais.rua;
    document.getElementById('bairro-empresa-view').value = PJAtual.pjData.dadosCadastrais.bairro;
    document.getElementById('numero-empresa-view').value = PJAtual.pjData.dadosCadastrais.numero;

    document.getElementById('banco-empresa-view').value = PJAtual.pjData.dadosBancarios.banco;
    document.getElementById('agencia-empresa-view').value = PJAtual.pjData.dadosBancarios.agencia;
    document.getElementById('numero-conta-empresa-view').value = PJAtual.pjData.dadosBancarios.conta.numero;
    document.getElementById('digito-conta-empresa-view').value = PJAtual.pjData.dadosBancarios.conta.digito;
    document.getElementById('tempo-conta-empresa-view').value = PJAtual.pjData.dadosBancarios.tempoConta;
    document.getElementById('telefone-agencia-empresa-view').value = PJAtual.pjData.dadosBancarios.telefoneAgencia;


    document.getElementById('porcentagem-socio-majoritario-empresa-view').value = PJAtual.pjData.socios.porcentagemSocioMajoritario;
    document.getElementById('porcentagem-demais-socios-empresa-view').value = PJAtual.pjData.socios.porcentagemDemaisSocios;

    if (PJAtual.pjData.socios.socioMajoritarioAssinaSozinho){
        socioMajoritarioViewPJ = "Sim";
        document.getElementById('socio-assina-sim-view').checked = true;
        document.getElementById('socio-assina-nao-view').checked = false;
    } else {
        socioMajoritarioViewPJ = "Não";
        document.getElementById('socio-assina-sim-view').checked = false;
        document.getElementById('socio-assina-nao-view').checked = true;
    }

    document.getElementById('socio-assina-sim-view').addEventListener('click',()=>{ 
        socioMajoritarioViewPJ = true;
        document.getElementById('socio-assina-nao-view').checked = false;
    });
    document.getElementById('socio-assina-nao-view').addEventListener('click',()=>{ 
        socioMajoritarioViewPJ = false;
        document.getElementById('socio-assina-sim-view').checked = false;
    });


    document.getElementById('nome-contador-empresa-view').value = PJAtual.pjData.contador.nome;
    document.getElementById('escritorio-contador-empresa-view').value = PJAtual.pjData.contador.escritorio;
    document.getElementById('telefone-fixo-contador-empresa-view').value = PJAtual.pjData.contador.telefoneFixo;
    document.getElementById('celular-contador-empresa-view').value = PJAtual.pjData.contador.celular;

    renderFaturamentoPJView(faturamentoContainerViewPJ,faturamentosAtuaisViewPJ);
    renderEmpresasAtuaisViewPJ(empresaAtualContainerViewPJ, empresasAtuaisViewPJ);
    renderEmpresasAnterioresViewPJ(empresaAnteriorContainerViewPJ, empresasAnterioresViewPJ);
    renderEmpresasFuturasViewPJ(empresaFuturaContainerViewPJ, empresasFuturasViewPJ);

    renderFrotaViewPJ (frotaVeiculoContainerViewPJ,frotaVeiculosViewPJ);
            document.getElementById('quitado-veiculo-frota-pj-view').addEventListener('click',()=>{ 
                veiculoFrotaQuitadoViewPJ = true;
                document.getElementById('nao-quitado-veiculo-frota-pj-view').checked = false;
            });
            document.getElementById('nao-quitado-veiculo-frota-pj-view').addEventListener('click',()=>{ 
                veiculoFrotaQuitadoViewPJ = false;
                document.getElementById('quitado-veiculo-frota-pj-view').checked = false;
            });

    renderReferenciasComerciaisViewPJ(referenciaComercialContainerViewPJ, referenciasComerciaisViewPJ);

    document.getElementById('marca-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.marca;
    document.getElementById('modelo-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.modelo;
    document.getElementById('ano-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.ano;
    document.getElementById('placa-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.placa;
    document.getElementById('valor-venda-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.valorDeVenda;
    document.getElementById('valor-molicar-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.valorDaMolicar;
    document.getElementById('valor-entrada-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.valorDeEntrada;
    document.getElementById('valor-financiado-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.valorFinanciado;
    document.getElementById('banco-aprovado-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.bancoAprovado;
    document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.condicoesAprovadas;
    document.getElementById('indicacao-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.indicacao;
    document.getElementById('data-conclusao-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.dataDeConclusao;
    document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj-view').value = PJAtual.pjData.veiculoAFinanciar.respostaNegativaCredito;
    document.getElementById('observacoes-pj-view').value = PJAtual.pjData.veiculoAFinanciar.observacoes;

}





function limpaViewPJ(){
    cpfViewPJ = [];
    faturamentosAtuaisViewPJ = [];
    empresasAtuaisViewPJ = [];
    empresasAnterioresViewPJ = [];
    empresasFuturasViewPJ = [];
    frotaVeiculosViewPJ = [];
    referenciasComerciaisViewPJ = [];
    veiculoFrotaQuitadoViewPJ = null;

    document.getElementById('modal-visualizacao-PJ').style.display = "none";
    document.getElementById('pj-view').style.display = "none";

    document.getElementById('socio-assina-sim-view').checked = false;
    document.getElementById('socio-assina-nao-view').checked = false;

    document.getElementById('titulo-pj-view').innerHTML = "";

    document.getElementById('app').style.display = 'block';
}




document.getElementById('fecha-view-pj').addEventListener('click',()=>{
    // limpar campos;
    limpaViewPJ();
})













document.getElementById('add-cpf-viewPJ').addEventListener('click', ()=>{
    cpfViewPJ.push(document.getElementById('cpfs-empresa-viewPJ').value.replace(/[^\d]+/g,''));
    document.getElementById('cpfs-empresa-viewPJ').value = "";
    renderCpfPJView(cpfContainerViewPJ,cpfViewPJ);
});

function deleteCpfPJViewPJ (pos){
    cpfViewPJ.splice(pos,1);
    renderCpfPJView(cpfContainerViewPJ,cpfViewPJ);
}

function renderCpfPJView (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let cpf = document.createElement('span');
            cpf.setAttribute('class','cpf')

        let content = document.createTextNode(element);
            cpf.appendChild(content);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteCpfPJViewPJ(${pos})`);

        li.appendChild(cpf);
        li.appendChild(del);

        container.appendChild(li);
    })
}



















document.getElementById('add-faturamento-viewPJ').addEventListener('click',()=>{
    faturamentosAtuaisViewPJ.push({
        mes: document.getElementById('data-faturamento-view').value,
        valor: document.getElementById('valor-faturamento-view').value
    })

    document.getElementById('data-faturamento-view').value = "";
    document.getElementById('valor-faturamento-view').value = "";

    renderFaturamentoPJView(faturamentoContainerViewPJ,faturamentosAtuaisViewPJ);
})

function deleteFaturamentoViewPJ(pos){
    faturamentosAtuaisViewPJ.splice(pos, 1);
    renderFaturamentoPJView(faturamentoContainerViewPJ,faturamentosAtuaisViewPJ);
}


function renderFaturamentoPJView(container,data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

            let content = document.createElement('div');
            

            let mes = document.createElement('p');
                mesValue = document.createTextNode(`Mes: ${element.mes}`);
                mes.appendChild(mesValue);

            let valor = document.createElement('p')
                valorValue = document.createTextNode(`Valor: ${element.valor}`);
                valor.appendChild(valorValue);


            content.appendChild(mes);
            content.appendChild(valor);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFaturamentoViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}












document.getElementById('add-empresa-atual-pj-view').addEventListener('click',()=>{
    empresasAtuaisViewPJ.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-atual-view').value,
        CEP: document.getElementById('cep-empresa-atual-pj-view').value,
        cidade: document.getElementById('cidade-empresa-atual-pj-view').value,
        rua: document.getElementById('rua-empresa-atual-pj-view').value,
        bairro: document.getElementById('bairro-empresa-atual-pj-view').value,
        numero: document.getElementById('numero-empresa-atual-pj-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-atual-pj-view').value,
        celular: document.getElementById('celular-empresa-atual-pj-view').value,
        tempoDeServico: document.getElementById('tempo-empresa-atual-pj-view').value,
        faturamentoAtual: document.getElementById('faturamento-atual-empresa-atual-pj-view').value,
        faturamentoFuturo: document.getElementById('faturamento-futuro-empresa-atual-pj-view').value
    })

    document.getElementById('nome-empresa-atual-view').value = "";
    document.getElementById('cep-empresa-atual-pj-view').value = "";
    document.getElementById('cidade-empresa-atual-pj-view').value = "";
    document.getElementById('rua-empresa-atual-pj-view').value = "";
    document.getElementById('bairro-empresa-atual-pj-view').value = "";
    document.getElementById('numero-empresa-atual-pj-view').value = "";
    document.getElementById('telefone-fixo-empresa-atual-pj-view').value = "";
    document.getElementById('celular-empresa-atual-pj-view').value = "";
    document.getElementById('tempo-empresa-atual-pj-view').value = "";
    document.getElementById('faturamento-atual-empresa-atual-pj-view').value = "";
    document.getElementById('faturamento-futuro-empresa-atual-pj-view').value = "";

    renderEmpresasAtuaisViewPJ(empresaAtualContainerViewPJ, empresasAtuaisViewPJ);
})

function deleteEmpresaAtualViewPJ(pos){
    empresasAtuaisViewPJ.splice(pos, 1);
    renderEmpresasAtuaisViewPJ(empresaAtualContainerViewPJ, empresasAtuaisViewPJ);
}

function renderEmpresasAtuaisViewPJ(container,data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.CEP}`);
                cep.appendChild(cepValue);

            let nomeDaEmpresa = document.createElement('p')
                nomeDaEmpresaValue = document.createTextNode(`Nome da empresa: ${element.nomeDaEmpresa}`);
                nomeDaEmpresa.appendChild(nomeDaEmpresaValue);

            let cidade = document.createElement('p');
                cidadeValue = document.createTextNode(`Cidade: ${element.cidade}`);
                cidade.appendChild(cidadeValue);

            let rua = document.createElement('p');
                ruaValue = document.createTextNode(`Rua: ${element.rua}`);
                rua.appendChild(ruaValue);

            let bairro = document.createElement('p');
                bairroValue = document.createTextNode(`Bairro: ${element.bairro}`);
                bairro.appendChild(bairroValue);

            let numero = document.createElement('p');
                numeroValue = document.createTextNode(`Número: ${element.numero}`);
                numero.appendChild(numeroValue);

            let telefoneFixo = document.createElement('p');
                telefoneFixoValue = document.createTextNode(`Telefone: ${element.telefoneFixo}`);
                telefoneFixo.appendChild(telefoneFixoValue);

            let celular = document.createElement('p');
                celularValue = document.createTextNode(`Celular: ${element.celular}`);
                celular.appendChild(celularValue);

            let tempoDeServico = document.createElement('p');
                tempoDeServicoValue = document.createTextNode(`Tempo De Serviço: ${element.tempoDeServico}`);
                tempoDeServico.appendChild(tempoDeServicoValue);

            let faturamentoAtual = document.createElement('p');
                faturamentoAtualValue = document.createTextNode(`Faturamento atual: ${element.faturamentoAtual}`);
                faturamentoAtual.appendChild(faturamentoAtualValue);

            let faturamentoFuturo = document.createElement('p');
                faturamentoFuturoValue = document.createTextNode(`Faturamento futuro: ${element.faturamentoFuturo}`);
                faturamentoFuturo.appendChild(faturamentoFuturoValue);

            content.appendChild(nomeDaEmpresa)
            content.appendChild(cidade);
            content.appendChild(bairro);
            content.appendChild(rua);
            content.appendChild(numero);
            content.appendChild(cep);
            content.appendChild(celular);
            content.appendChild(telefoneFixo);
            content.appendChild(tempoDeServico);
            content.appendChild(faturamentoAtual);
            content.appendChild(faturamentoFuturo);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAtualViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}





















document.getElementById('add-empresa-anterior-pj-view').addEventListener('click',()=>{
    empresasAnterioresViewPJ.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-anterior-pj-view').value,
        CEP: document.getElementById('cep-empresa-anterior-pj-view').value,
        cidade: document.getElementById('cidade-empresa-anterior-pj-view').value,
        rua: document.getElementById('rua-empresa-anterior-pj-view').value,
        bairro: document.getElementById('bairro-empresa-anterior-pj-view').value,
        numero: document.getElementById('numero-empresa-anterior-pj-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-anterior-pj-view').value,
        celular: document.getElementById('celular-empresa-anteriorpj-view').value,
        tempoDeServico: document.getElementById('tempo-empresa-anterior-pj-view').value,
        salario: document.getElementById('salario-empresa-anterior-pj-view').value,
    })

    document.getElementById('nome-empresa-anterior-pj-view').value = "";
    document.getElementById('cep-empresa-anterior-pj-view').value = "";
    document.getElementById('cidade-empresa-anterior-pj-view').value = "";
    document.getElementById('rua-empresa-anterior-pj-view').value = "";
    document.getElementById('bairro-empresa-anterior-pj-view').value = "";
    document.getElementById('numero-empresa-anterior-pj-view').value = "";
    document.getElementById('telefone-fixo-empresa-anterior-pj-view').value = "";
    document.getElementById('celular-empresa-anteriorpj-view').value = "";
    document.getElementById('tempo-empresa-anterior-pj-view').value = "";
    document.getElementById('salario-empresa-anterior-pj-view').value = "";

    renderEmpresasAnterioresViewPJ(empresaAnteriorContainerViewPJ, empresasAnterioresViewPJ);
})

function deleteEmpresaAnteriorViewPJ(pos){
    empresasAnterioresViewPJ.splice(pos, 1);
    renderEmpresasAnterioresViewPJ(empresaAnteriorContainerViewPJ, empresasAnterioresViewPJ);
}

function renderEmpresasAnterioresViewPJ (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";


        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.CEP}`);
                cep.appendChild(cepValue);

            let nomeDaEmpresa = document.createElement('p')
                nomeDaEmpresaValue = document.createTextNode(`Nome da empresa: ${element.nomeDaEmpresa}`);
                nomeDaEmpresa.appendChild(nomeDaEmpresaValue);

            let cidade = document.createElement('p');
                cidadeValue = document.createTextNode(`Cidade: ${element.cidade}`);
                cidade.appendChild(cidadeValue);

            let rua = document.createElement('p');
                ruaValue = document.createTextNode(`Rua: ${element.rua}`);
                rua.appendChild(ruaValue);

            let bairro = document.createElement('p');
                bairroValue = document.createTextNode(`Bairro: ${element.bairro}`);
                bairro.appendChild(bairroValue);

            let numero = document.createElement('p');
                numeroValue = document.createTextNode(`Número: ${element.numero}`);
                numero.appendChild(numeroValue);

            let telefoneFixo = document.createElement('p');
                telefoneFixoValue = document.createTextNode(`Telefone: ${element.telefoneFixo}`);
                telefoneFixo.appendChild(telefoneFixoValue);

            let celular = document.createElement('p');
                celularValue = document.createTextNode(`Celular: ${element.celular}`);
                celular.appendChild(celularValue);

            let tempoDeServico = document.createElement('p');
                tempoDeServicoValue = document.createTextNode(`Tempo De Serviço: ${element.tempoDeServico}`);
                tempoDeServico.appendChild(tempoDeServicoValue);

            let salario = document.createElement('p');
                salarioValue = document.createTextNode(`Salário: ${element.salario}`);
                salario.appendChild(salarioValue);

            content.appendChild(nomeDaEmpresa)
            content.appendChild(cidade);
            content.appendChild(bairro);
            content.appendChild(rua);
            content.appendChild(numero);
            content.appendChild(cep);
            content.appendChild(celular);
            content.appendChild(telefoneFixo);
            content.appendChild(tempoDeServico);
            content.appendChild(salario);
        
        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAnteriorViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}






















document.getElementById('add-empresa-futura-pj-view').addEventListener('click',()=>{
    empresasFuturasViewPJ.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-futura-pj-view').value,
        CEP: document.getElementById('cep-empresa-futura-pj-view').value,
        cidade: document.getElementById('cidade-empresa-futura-pj-view').value,
        rua: document.getElementById('rua-empresa-futura-pj-view').value,
        bairro: document.getElementById('bairro-empresa-futura-pj-view').value,
        numero: document.getElementById('numero-empresa-futura-pj-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-futura-pj-view').value,
        celular: document.getElementById('celular-empresa-futura-pj-view').value,
        salario: document.getElementById('salario-empresa-futura-pj-view').value,
    })

    document.getElementById('nome-empresa-futura-pj-view').value = "";
    document.getElementById('cep-empresa-futura-pj-view').value = "";
    document.getElementById('cidade-empresa-futura-pj-view').value = "";
    document.getElementById('rua-empresa-anterior-pj-view').value = "";
    document.getElementById('bairro-empresa-futura-pj-view').value = "";
    document.getElementById('numero-empresa-futura-pj-view').value = "";
    document.getElementById('telefone-fixo-empresa-futura-pj-view').value = "";
    document.getElementById('celular-empresa-futura-pj-view').value = "";
    document.getElementById('salario-empresa-futura-pj-view').value = "";

    renderEmpresasFuturasViewPJ(empresaFuturaContainerViewPJ, empresasFuturasViewPJ);
})

function deleteEmpresaFuturaViewPJ(pos){
    empresasFuturasViewPJ.splice(pos, 1);
    renderEmpresasFuturasViewPJ(empresaFuturaContainerViewPJ, empresasFuturasViewPJ);
}

function renderEmpresasFuturasViewPJ (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";


        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.CEP}`);
                cep.appendChild(cepValue);

            let nomeDaEmpresa = document.createElement('p')
                nomeDaEmpresaValue = document.createTextNode(`Nome da empresa: ${element.nomeDaEmpresa}`);
                nomeDaEmpresa.appendChild(nomeDaEmpresaValue);

            let cidade = document.createElement('p');
                cidadeValue = document.createTextNode(`Cidade: ${element.cidade}`);
                cidade.appendChild(cidadeValue);

            let rua = document.createElement('p');
                ruaValue = document.createTextNode(`Rua: ${element.rua}`);
                rua.appendChild(ruaValue);

            let bairro = document.createElement('p');
                bairroValue = document.createTextNode(`Bairro: ${element.bairro}`);
                bairro.appendChild(bairroValue);

            let numero = document.createElement('p');
                numeroValue = document.createTextNode(`Número: ${element.numero}`);
                numero.appendChild(numeroValue);

            let telefoneFixo = document.createElement('p');
                telefoneFixoValue = document.createTextNode(`Telefone: ${element.telefoneFixo}`);
                telefoneFixo.appendChild(telefoneFixoValue);

            let celular = document.createElement('p');
                celularValue = document.createTextNode(`Celular: ${element.celular}`);
                celular.appendChild(celularValue);

            let salario = document.createElement('p');
                salarioValue = document.createTextNode(`Salário: ${element.salario}`);
                salario.appendChild(salarioValue);

            content.appendChild(nomeDaEmpresa)
            content.appendChild(cidade);
            content.appendChild(bairro);
            content.appendChild(rua);
            content.appendChild(numero);
            content.appendChild(cep);
            content.appendChild(celular);
            content.appendChild(telefoneFixo);
            content.appendChild(salario);
        
        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaFuturaViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}





















document.getElementById('add-veiculo-frota-pj-view').addEventListener('click',()=>{
    frotaVeiculosViewPJ.push({
        ano: document.getElementById('ano-veiculo-frota-pj-view').value,
        marca: document.getElementById('marca-veiculo-frota-pj-view').value,
        modelo: document.getElementById('modelo-veiculo-frota-pj-view').value,
        placa: document.getElementById('placa-veiculo-frota-pj-view').value,
        quitado: veiculoFrotaQuitadoViewPJ,
        tempoEmNome: document.getElementById('tempo-em-nome-veiculo-frota-pj-view').value
    })

    renderFrotaViewPJ (frotaVeiculoContainerViewPJ,frotaVeiculosViewPJ);

    document.getElementById('ano-veiculo-frota-pj-view').value = "";
    document.getElementById('marca-veiculo-frota-pj-view').value = "";
    document.getElementById('modelo-veiculo-frota-pj-view').value = "";
    document.getElementById('placa-veiculo-frota-pj-view').value = "";
    document.getElementById('tempo-em-nome-veiculo-frota-pj-view').value = "";
    document.getElementById('quitado-veiculo-frota-pj-view').checked = false;
    document.getElementById('nao-quitado-veiculo-frota-pj-view').checked = false;
    veiculoFrotaQuitadoViewPJ = null;

})

function deleteFrotaViewPJ(pos){
    frotaVeiculosViewPJ.splice(pos,1);
    renderFrotaViewPJ (frotaVeiculoContainerViewPJ,frotaVeiculosViewPJ);
}

function renderFrotaViewPJ(container,data){
    container.innerHTML = "";

    data.forEach(element => {

        let quitado;

        if (element.quitado){
            quitado = "Sim"
        } else {
            quitado = "Não"
        }

        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let content = document.createElement('div');

            let marca = document.createElement('p');
                marcaValue = document.createTextNode(`Marca: ${element.marca}`);
                marca.appendChild(marcaValue);

            let modelo = document.createElement('p')
                modeloValue = document.createTextNode(`Modelo: ${element.modelo}`);
                modelo.appendChild(modeloValue);

            let ano = document.createElement('p');
                anoValue = document.createTextNode(`Ano: ${element.ano}`);
                ano.appendChild(anoValue);

            let placa = document.createElement('p');
                placaValue = document.createTextNode(`Placa: ${element.placa}`);
                placa.appendChild(placaValue);

            let tempoEmNome = document.createElement('p');
                tempoEmNomeValue = document.createTextNode(`Tempo em nome: ${element.tempoEmNome}`);
                tempoEmNome.appendChild(tempoEmNomeValue);

            let veiculoQuitado = document.createElement('p');
                veiculoQuitadoValue = document.createTextNode(`Quitado: ${quitado}`);
                veiculoQuitado.appendChild(veiculoQuitadoValue);


            content.appendChild(marca)
            content.appendChild(modelo);
            content.appendChild(ano);
            content.appendChild(placa);
            content.appendChild(tempoEmNome);
            content.appendChild(veiculoQuitado);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFrotaViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })

}

























document.getElementById('add-referencia-comercial-pj-view').addEventListener('click',()=>{
    referenciasComerciaisViewPJ.push({
        empresa: document.getElementById('nome-empresa-referencia-comercial-pj-view').value,
        telefone: document.getElementById('telefone-empresa-referencia-comercial-pj-view').value
    })

    document.getElementById('nome-empresa-referencia-comercial-pj-view').value = "";
    document.getElementById('telefone-empresa-referencia-comercial-pj-view').value = "";

    renderReferenciasComerciaisViewPJ(referenciaComercialContainerViewPJ, referenciasComerciaisViewPJ);
})

function deleteReferenciaComercialViewPJ(pos){
    referenciasComerciaisViewPJ.splice(pos,1);
    renderReferenciasComerciaisViewPJ(referenciaComercialContainerViewPJ, referenciasComerciaisViewPJ);
}




function renderReferenciasComerciaisViewPJ(container,data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let content = document.createElement('div');
            

            let empresa = document.createElement('p');
                empresaValue = document.createTextNode(`Empresa: ${element.empresa}`);
                empresa.appendChild(empresaValue);

            let telefone = document.createElement('p')
                telefoneValue = document.createTextNode(`Telefone: ${element.telefone}`);
                telefone.appendChild(telefoneValue);


            content.appendChild(empresa);
            content.appendChild(telefone);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteReferenciaComercialViewPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}






















document.getElementById('atualiza-cadastro-pj').addEventListener('click', async ()=>{
    let updatedPJ = {
        dadosCadastrais : {
            razaoSocial : document.getElementById('razao-social-pj-view').value,
            CNPJ : document.getElementById('cnpj-empresa-view').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-empresa-view').value,
            CPF : cpfViewPJ,
            dataAbertura : document.getElementById('data-abertura-empresa-view').value,
            capitalSocial : document.getElementById('capital-social-empresa-view').value,
            numeroFuncionariosRegistrados : document.getElementById('numero-funcionarios-registrados-view').value,
            telefoneFixo : document.getElementById('telefone-fixo-pj-view').value,
            CEP : document.getElementById('cep-empresa-view').value,
            cidade : document.getElementById('cidade-empresa-view').value,
            rua : document.getElementById('rua-empresa-view').value,
            bairro : document.getElementById('bairro-empresa-view').value,
            numero : document.getElementById('numero-empresa-view').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-empresa-view').value,
            agencia : document.getElementById('agencia-empresa-view').value,
            conta : {
                numero : document.getElementById('numero-conta-empresa-view').value,
                digito : document.getElementById('digito-conta-empresa-view').value
            },
            tempoConta : document.getElementById('tempo-conta-empresa-view').value,
            telefoneAgencia : document.getElementById('telefone-agencia-empresa-view').value
        },
        socios : {
            porcentagemSocioMajoritario : document.getElementById('porcentagem-socio-majoritario-empresa-view').value,
            porcentagemDemaisSocios : document.getElementById('porcentagem-demais-socios-empresa-view').value,
            socioMajoritarioAssinaSozinho : socioMajoritarioViewPJ
        },
        contador : {
            nome : document.getElementById('nome-contador-empresa-view').value,
            escritorio : document.getElementById('escritorio-contador-empresa-view').value,
            telefoneFixo : document.getElementById('telefone-fixo-contador-empresa-view').value,
            celular : document.getElementById('celular-contador-empresa-view').value
        },
        faturamento : faturamentosAtuaisViewPJ,
        ondePrestaServicos : {
            empresasAtuais : empresasAtuaisViewPJ,
            empresasAnteriores : empresasAnterioresViewPJ,
            empresasFuturas : empresasFuturasViewPJ
        },
        frotaDeVeiculos : frotaVeiculosViewPJ,
        referenciasComerciais : referenciasComerciaisViewPJ,
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pj-view').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pj-view').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pj-view').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pj-view').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pj-view').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pj-view').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pj-view').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pj-view').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pj-view').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj-view').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pj-view').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pj-view').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj-view').value,
            observacoes : document.getElementById('observacoes-pj-view').value
        }
    } // fim do objeto

    //let ID = updatedPJ.dadosCadastrais.CNPJ;
    await createPJ(updatedPJ);

    cardsData = await getAllPJ(6);
    renderCardsPJ(cardsContainerPJ,cardsData);


    limpaViewPJ();
})













document.getElementById('exclui-cadastro-pj').addEventListener('click',async ()=>{
    let ID = document.getElementById('cnpj-empresa-view').value.replace(/[^\d]+/g,'');

    await deletePJ(ID);

    cardsData = await getAllPJ(6);
    renderCardsPJ(cardsContainerPJ,cardsData);

    limpaViewPJ();
})






document.getElementById('abre-email-pj').addEventListener('click',()=>{
    document.getElementById('modal-email-PJ').style.display = "block";
})

document.getElementById('cancela-email-pj').addEventListener('click',()=>{
    document.getElementById('modal-email-PJ').style.display = "none";
    document.getElementById('destinatario-email-PJ').value = "";
    document.getElementById('assunto-email-PJ').value = "";
})


document.getElementById('envia-email-pj').addEventListener('click',async()=>{

    let mailData = {
        dadosCadastrais : {
            razaoSocial : document.getElementById('razao-social-pj-view').value,
            CNPJ : document.getElementById('cnpj-empresa-view').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-empresa-view').value,
            CPF : mailerizeCpfCnpj(cpfViewPJ),
            dataAbertura : document.getElementById('data-abertura-empresa-view').value,
            capitalSocial : document.getElementById('capital-social-empresa-view').value,
            numeroFuncionariosRegistrados : document.getElementById('numero-funcionarios-registrados-view').value,
            telefoneFixo : document.getElementById('telefone-fixo-pj-view').value,
            CEP : document.getElementById('cep-empresa-view').value,
            cidade : document.getElementById('cidade-empresa-view').value,
            rua : document.getElementById('rua-empresa-view').value,
            bairro : document.getElementById('bairro-empresa-view').value,
            numero : document.getElementById('numero-empresa-view').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-empresa-view').value,
            agencia : document.getElementById('agencia-empresa-view').value,
            conta : {
                numero : document.getElementById('numero-conta-empresa-view').value,
                digito : document.getElementById('digito-conta-empresa-view').value
            },
            tempoConta : document.getElementById('tempo-conta-empresa-view').value,
            telefoneAgencia : document.getElementById('telefone-agencia-empresa-view').value
        },
        socios : {
            porcentagemSocioMajoritario : document.getElementById('porcentagem-socio-majoritario-empresa-view').value,
            porcentagemDemaisSocios : document.getElementById('porcentagem-demais-socios-empresa-view').value,
            socioMajoritarioAssinaSozinho : socioMajoritarioViewPJ
        },
        contador : {
            nome : document.getElementById('nome-contador-empresa-view').value,
            escritorio : document.getElementById('escritorio-contador-empresa-view').value,
            telefoneFixo : document.getElementById('telefone-fixo-contador-empresa-view').value,
            celular : document.getElementById('celular-contador-empresa-view').value
        },
        faturamento : mailerizeFaturamentos(faturamentosAtuaisViewPJ),
        ondePrestaServicos : {
            empresasAtuais : mailerizeEmpresasAtuaisPJ(empresasAtuaisViewPJ),
            empresasAnteriores : mailerizeEmpresasAnterioresPJ(empresasAnterioresViewPJ),
            empresasFuturas : mailerizeEmpresasFuturasPJ(empresasFuturasViewPJ)
        },
        frotaDeVeiculos : mailerizeFrotaVeiculos(frotaVeiculosViewPJ),
        referenciasComerciais : mailerizeReferenciasComerciais(referenciasComerciaisViewPJ),
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pj-view').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pj-view').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pj-view').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pj-view').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pj-view').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pj-view').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pj-view').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pj-view').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pj-view').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj-view').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pj-view').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pj-view').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj-view').value,
            observacoes : document.getElementById('observacoes-pj-view').value
        }
    } // fim do objeto

    await axios.post('https://automate-heroku-renan.herokuapp.com/mail',{
        destino: `${document.getElementById('destinatario-email-PJ').value}`,
        assunto: `${document.getElementById('assunto-email-PJ').value}`,
        corpo: `
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Dados cadastrais</h1>
            <p><b>Razão social: </b>${mailData.dadosCadastrais.razaoSocial}</p>
            <p> <b>CNPJ: </b>${mailData.dadosCadastrais.CNPJ}</p>
            <p> <b>E-Mail: </b>${mailData.dadosCadastrais.email}</p>
            <p> <b>CPF's dos sócios: </b>${mailData.dadosCadastrais.CPF}</p>
            <p> <b>Data de abertura: </b>${mailData.dadosCadastrais.dataAbertura}</p>
            <p> <b>Capital social: </b>${mailData.dadosCadastrais.capitalSocial}</p>
            <p> <b>Numero de funcionarios registrados: </b>${mailData.dadosCadastrais.numeroFuncionariosRegistrados}</p>
            <p> <b>Telefone Fixo: </b>${mailData.dadosCadastrais.telefoneFixo}</p>
            <p> <b>CEP: </b>${mailData.dadosCadastrais.CEP}</p>
            <p> <b>Cidade: </b>${mailData.dadosCadastrais.cidade}</p>
            <p> <b>Rua: </b>${mailData.dadosCadastrais.rua}</p>
            <p> <b>Bairro: </b>${mailData.dadosCadastrais.bairro}</p>
            <p> <b>Número: </b>${mailData.dadosCadastrais.numero}</p>
        </div>
    
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Dados Bancários</h1>
            <p><b>Banco: </b>${mailData.dadosBancarios.banco}</p>
            <p><b>Agência: </b>${mailData.dadosBancarios.agencia}</p>
            <p><b>Conta Corrente:</b> <b>Numero: </b>${mailData.dadosBancarios.conta.numero} <b>Dígito: </b>${mailData.dadosBancarios.conta.digito}</p>
            <p><b>Tempo de conta: </b>${mailData.dadosBancarios.tempoConta}</p>
            <p><b>Telefone da agência: </b>${mailData.dadosBancarios.telefoneAgencia}</p>
        </div>

        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Sócios</h1>
            <p><b>Porcentagem do sócio majoritário: </b>${mailData.socios.porcentagemSocioMajoritario}</p>
            <p><b>Porcentagem dos demais sócios: </b>${mailData.socios.porcentagemDemaisSocios}</p>
            <p><b>Sócio majoritário assina sozinho?: </b>${mailData.socios.socioMajoritarioAssinaSozinho}</p>
        </div>

        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Contador</h1>
            <p><b>Nome do contador: </b>${mailData.contador.nome}</p>
            <p><b>Escritório: </b>${mailData.contador.escritorio}</p>
            <p><b>Telefone fixo: </b>${mailData.contador.telefoneFixo}</p>
            <p><b><Celular: /b>${mailData.contador.celular}</p>
        </div>


        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1><b>Últimos faturamentos registrados: </b></h1>
            <p>${mailData.faturamento}</p>
        </div>

        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Onde presta serviços: </h1>
                    
            <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                <h1>Empresas atuais</h1>    
                <p>${mailData.ondePrestaServicos.empresasAtuais}</p>
            </div>

            <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                <h1>Empresas anteriores</h1>    
                <p>${mailData.ondePrestaServicos.empresasAnteriores}</p>
            </div>

            <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                <h1>Empresas futuras</h1>
                <p>${mailData.ondePrestaServicos.empresasFuturas}</p>
            </div>     
        </div>

        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Frota de veiculos</h1>
            <p>${mailData.frotaDeVeiculos}</p>
        </div>
                
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Referencias comerciais</h1>
            <p>${mailData.referenciasComerciais}</p>
        </div>


        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <h1>Veículo à financiar</h1> 
            <p><b>Marca: </b>${mailData.veiculoAFinanciar.marca}</p>    
            <p><b>Modelo: </b>${mailData.veiculoAFinanciar.modelo}</p>       
            <p><b>Ano: </b>${mailData.veiculoAFinanciar.ano}</p>     
            <p><b>Placa: </b>${mailData.veiculoAFinanciar.placa}</p>     
            <p><b>Valor de venda: </b>${mailData.veiculoAFinanciar.valorDeVenda}</p>       
            <p><b>Valor da molicar: </b>${mailData.veiculoAFinanciar.valorDaMolicar}</p>       
            <p><b>Valor de entrada: </b>${mailData.veiculoAFinanciar.valorDeEntrada}</p>   
            <p><b>Valor financiado: </b>${mailData.veiculoAFinanciar.valorFinanciado}</p> 
            <p><b>Banco aprovado: </b>${mailData.veiculoAFinanciar.bancoAprovado}</p> 
            <p><b>Condições aprovadas: </b>${mailData.veiculoAFinanciar.condicoesAprovadas}</p>
            <p><b>Indicação: </b>${mailData.veiculoAFinanciar.indicacao}</p>
            <p><b>Data de conclusão: </b>${mailData.veiculoAFinanciar.dataDeConclusao}</p>
            <p><b>Resposta de negativa de credito: </b>${mailData.veiculoAFinanciar.respostaNegativaCredito}</p>    
            <p><b>Observações: </b>${mailData.veiculoAFinanciar.observacoes}</p>
        </div>
     `
    })
    .then((response)=>{
        console.log(response);
    }, (error)=>{
        console.log(error);
    });

    document.getElementById('modal-email-PJ').style.display = "none";
    document.getElementById('destinatario-email-PJ').value = "";
    document.getElementById('assunto-email-PJ').value = "";
 
 })










function mailerizeEmpresasAtuaisPJ(empresasAtuais){
  let serialized = [];
  empresasAtuais.forEach(element=>{
    serialized.push(
      `
      <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
        <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
        <p><b>CEP: </b>${element.CEP}</p>
        <p><b>Cidade: </b>${element.cidade}</p>
        <p><b>Rua: </b>${element.rua}</p>
        <p><b>Bairro: </b>${element.bairro}</p>
        <p><b>Numero: </b>${element.numero}</p>
        <p><b>Telefone Fixo: </b>${element.telefoneFixo}</p>
        <p><b>Celular: </b>${element.celular}</p>
        <p><b>Tempo de serviço: </b>${element.tempoDeServico}</p>
        <p><b>Faturamento Atual: </b>${element.faturamentoAtual}</p>
        <p><b>Faturamento Futuro: </b>${element.faturamentoFuturo}</p>
      </div>
      `);
  })
  return serialized.join('');
}





function mailerizeEmpresasAnterioresPJ(empresasAnteriores){
  let serialized = [];
  empresasAnteriores.forEach(element=>{
    serialized.push(
      `
      <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
        <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
        <p><b>CEP: </b>${element.CEP}</p>
        <p><b>Cidade: </b>${element.cidade}</p>
        <p><b>Rua: </b>${element.rua}</p>
        <p><b>Bairro: </b>${element.bairro}</p>
        <p><b>Numero: </b>${element.numero}</p>
        <p><b>Telefone Fixo: </b>${element.telefoneFixo}</p>
        <p><b>Celular: </b>${element.celular}</p>
        <p><b>Tempo de serviço: </b>${element.tempoDeServico}</p>
        <p><b>Salario: </b>${element.salario}</p>
      </div>
      `);
  })
  return serialized.join('');
}

function mailerizeEmpresasFuturasPJ(empresasFuturas){
  let serialized = [];
  empresasFuturas.forEach(element=>{
    serialized.push(
      `
      <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
        <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
        <p><b>CEP: </b>${element.CEP}</p>
        <p><b>Cidade: </b>${element.cidade}</p>
        <p><b>Rua: </b>${element.rua}</p>
        <p><b>Bairro: </b>${element.bairro}</p>
        <p><b>Numero: </b>${element.numero}</p>
        <p><b>Telefone Fixo: </b>${element.telefoneFixo}</p>
        <p><b>Celular: </b>${element.celular}</p>
        <p><b>Salario: </b>${element.salario}</p>
      </div>
      `);
  })
  return serialized.join('');
}


function mailerizeReferenciasComerciais(referenciasComerciais){
  let serialized = [];
  referenciasComerciais.forEach(element=>{
    serialized.push(
      `
      <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
        <p><b>Empresa: </b>${element.empresa}</p>
        <p><b>Telefone: </b>${element.telefone}</p>
      </div>
      `);
  })
  return serialized.join('');
}







function mailerizeFaturamentos(faturamentos){
    let serialized = [];
    
    faturamentos.forEach(element=>{
      serialized.push(
        `
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
            <p><b>Mes: </b>${element.mes}</p>
            <p><b>Ano: </b>${element.ano}</p>
            <p><b>Valor: </b>${element.valor}</p>
        </div>
        `);
    })
    return serialized.join('');
  }







document.getElementById('cep-empresa-view').addEventListener('focusout', async ()=>{
    let CEP = document.getElementById('cep-empresa-view').value.replace(/[^\d]+/g,'');
    let {bairro, localidade, logradouro} = await getCEP(CEP);

    document.getElementById('cidade-empresa-view').value = localidade;
    document.getElementById('rua-empresa-view').value = logradouro;
    document.getElementById('bairro-empresa-view').value = bairro;

})


document.getElementById('cep-empresa-anterior-pj-view').addEventListener('focusout', async ()=>{
    let CEP = document.getElementById('cep-empresa-anterior-pj-view').value.replace(/[^\d]+/g,'');
    let {bairro, localidade, logradouro} = await getCEP(CEP);

    document.getElementById('cidade-empresa-anterior-pj-view').value = localidade;
    document.getElementById('rua-empresa-atual-pj-view').value = logradouro;
    document.getElementById('bairro-empresa-anterior-pj-view').value = bairro;

})


document.getElementById('cep-empresa-futura-pj-view').addEventListener('focusout', async ()=>{
    let CEP = document.getElementById('cep-empresa-futura-pj-view').value.replace(/[^\d]+/g,'');
    let {bairro, localidade, logradouro} = await getCEP(CEP);

    document.getElementById('cidade-empresa-futura-pj-view').value = localidade;
    document.getElementById('rua-empresa-futura-pj-view').value = logradouro;
    document.getElementById('bairro-empresa-futura-pj-view').value = bairro;

})

document.getElementById('imprime-registro-pj').addEventListener('click',()=>{
    var conteudo = document.getElementById('modal-visualizacao-PJ');
  
    window.print(conteudo);
});