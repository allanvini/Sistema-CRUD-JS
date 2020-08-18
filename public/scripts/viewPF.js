let cnpjContainerViewPF = document.getElementById('cnpj-pego-pf-view');
let faturamentoContainerViewPF = document.getElementById('faturamento-pego-view');
let empresaAtualContainerViewPF = document.getElementById('empresas-atuais-pego-pj-view');
let empresaAnteriorContainerViewPF = document.getElementById('empresas-anterior-pego-pj-view');
let empresaFuturaContainerViewPF = document.getElementById('empresas-futura-pego-pj-view');
let frotaVeiculoContainerViewPF = document.getElementById('veiculos-frota-pego-pj-view');
let referenciaPessoalContainerViewPF = document.getElementById('referencia-comercial-pego-pj-view');

let cnpjViewPF = [];
let empresasAtuaisViewPF = [];
let empresasAnterioresViewPF = [];
let empresasFuturasViewPF = [];
let frotaVeiculosViewPF = [];
let referenciasPessoaisViewPF = [];

let veiculoFrotaQuitadoViewPF;



function visualizePF (pos){

    let PFAtual = cardsData[pos];


    let nome = document.getElementById('titulo-pf-view');
        let nomeText = document.createTextNode(PFAtual.pfData.dadosCadastrais.nomeCompleto);
        nome.appendChild(nomeText);

    cnpjViewPF = PFAtual.pfData.dadosCadastrais.CNPJ;
    empresasAtuaisViewPJ = PFAtual.pfData.ondePrestaServicos.empresasAtuais;
    empresasAnterioresViewPJ = PFAtual.pfData.ondePrestaServicos.empresasAnteriores;
    empresasFuturasViewPJ = PFAtual.pfData.ondePrestaServicos.empresasFuturas;
    frotaVeiculosViewPJ = PFAtual.pfData.frotaDeVeiculos;
    referenciasComerciaisViewPJ = PFAtual.pfData.referenciaPessoal;


    document.getElementById('modal-visualizacao-PF').style.display = "block";
    document.getElementById('pf-view').style.display = "block";


    document.getElementById('nome-completo-pf-view').value = PFAtual.pfData.dadosCadastrais.nomeCompleto;
    document.getElementById('CPF-pf-view').value = PFAtual.pfData.dadosCadastrais.CPF;
    document.getElementById('email-pf-view').value = PFAtual.pfData.dadosCadastrais.email;

    renderCnpjPFView(cnpjContainerViewPF,cnpjViewPF);

    document.getElementById('RG-pf-view').value = PFAtual.pfData.dadosCadastrais.RG;
    document.getElementById('data-nascimento-pf-view').value = PFAtual.pfData.dadosCadastrais.dataDeNascimento;
    document.getElementById('estado-civil-pf-view').value = PFAtual.pfData.dadosCadastrais.estadoCivil;
    document.getElementById('naturalidade-pf-view').value = PFAtual.pfData.dadosCadastrais.naturalidade;
    document.getElementById('nome-pai-pf-view'),value = PFAtual.pfData.dadosCadastrais.nomeDoPai;
    document.getElementById('nome-mae-pf-view').value = PFAtual.pfData.dadosCadastrais.nomeDaMae;

    document.getElementById('banco-pf-view').value = PFAtual.pfData.dadosBancarios.banco;
    document.getElementById('agencia-pf-view').value = PFAtual.pfData.dadosBancarios.agencia;
    document.getElementById('numero-conta-pf-view').value = PFAtual.pfData.dadosBancarios.contaCorrente.numero;
    document.getElementById('digito-conta-pf-view').value = PFAtual.pfData.dadosBancarios.contaCorrente.digito;
    document.getElementById('tempo-conta-pf-view').value = PFAtual.pfData.dadosBancarios.tempoDeConta;
    document.getElementById('telefone-agencia-pf-view').value = PFAtual.pfData.dadosBancarios.telefoneDaAgencia;

    document.getElementById('CEP-endereco-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.cep;
    document.getElementById('cidade-endereco-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.cidade;
    document.getElementById('rua-endereco-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.rua;
    document.getElementById('bairro-endereco-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.bairro;
    document.getElementById('numero-endereco-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.numero;

    



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

    document.getElementById('marca-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.marca;
    document.getElementById('modelo-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.modelo;
    document.getElementById('ano-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.ano;
    document.getElementById('placa-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.placa;
    document.getElementById('valor-venda-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.valorDeVenda;
    document.getElementById('valor-molicar-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.valorDaMolicar;
    document.getElementById('valor-entrada-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.valorDeEntrada;
    document.getElementById('valor-financiado-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.valorFinanciado;
    document.getElementById('banco-aprovado-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.bancoAprovado;
    document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.condicoesAprovadas;
    document.getElementById('indicacao-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.indicacao;
    document.getElementById('data-conclusao-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.dataDeConclusao;
    document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj-view').value = PFAtual.pfData.veiculoAFinanciar.respostaNegativaCredito;
    document.getElementById('observacoes-pj-view').value = PFAtual.pfData.veiculoAFinanciar.observacoes;

}





function limpaViewPJ(){
    cnpjViewPF = [];
    empresasAtuaisViewPF = [];
    empresasAnterioresViewPF = [];
    empresasFuturasViewPF = [];
    frotaVeiculosViewPF = [];
    referenciasPessoaisViewPF = [];
    veiculoFrotaQuitadoViewPF = null;

    document.getElementById('modal-visualizacao-PF').style.display = "none";
    document.getElementById('pf-view').style.display = "none";

    document.getElementById('titulo-pj-view').innerHTML = "";
}




document.getElementById('fecha-view-pj').addEventListener('click',()=>{
    // limpar campos;
    limpaViewPJ();
})













document.getElementById('add-cnpj-pf-view').addEventListener('click', ()=>{
    cnpjViewPF.push(document.getElementById('cnpj-pf-view').value);
    document.getElementById('cnpj-pf-view').value = "";
    renderCnpjPFView(cnpjContainerViewPF,cnpjViewPF);
});

function deleteCnpjPFView (pos){
    cnpjViewPF.splice(pos,1);
    renderCnpjPFView(cnpjContainerViewPF,cnpjViewPF);
}

function renderCnpjPFView (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let cpf = document.createElement('span');
            cpf.setAttribute('class','cnpj')

        let content = document.createTextNode(element);
            cpf.appendChild(content);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteCnpjPFView(${pos})`);

        li.appendChild(cpf);
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
            CPF : cnpjViewPF,
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
    createPJ(updatedPJ);

    cardsData = await getAllPJ(6);
    renderCardsPJ(cardsContainerPJ,cardsData);


    limpaViewPJ();
})













document.getElementById('exclui-cadastro-pj').addEventListener('click',async ()=>{
    let ID = document.getElementById('cnpj-empresa-view').value.replace(/[^\d]+/g,'');

    deletePJ(ID);

    cardsData = await getAllPJ(6);
    renderCardsPJ(cardsContainerPJ,cardsData);

    limpaViewPJ();
})
