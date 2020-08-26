let cnpjContainerViewPF = document.getElementById('cnpj-pego-pf-view');
let empresaAtualContainerViewPF = document.getElementById('empresas-atuais-pego-pf-view');
let empresaAnteriorContainerViewPF = document.getElementById('empresas-anterior-pego-pf-view');
let empresaFuturaContainerViewPF = document.getElementById('empresas-futura-pego-pf-view');
let frotaVeiculoContainerViewPF = document.getElementById('veiculos-frota-pego-pf-view');
let referenciaPessoalContainerViewPF = document.getElementById('referencia-pessoal-pego-pf-view');

let cnpjViewPF = [];
let empresasAtuaisViewPF = [];
let empresasAnterioresViewPF = [];
let empresasFuturasViewPF = [];
let frotaVeiculosViewPF = [];
let referenciasPessoaisViewPF = [];

let veiculoFrotaQuitadoViewPF;
let imovelProprioViewPF;



function visualizePF (pos){

    document.getElementById('app').style.display = 'none';

    let PFAtual = cardsData[pos];


    let nome = document.getElementById('titulo-pf-view');
        let nomeText = document.createTextNode(PFAtual.pfData.dadosCadastrais.nomeCompleto);
        nome.appendChild(nomeText);

    cnpjViewPF = PFAtual.pfData.dadosCadastrais.CNPJ;
    empresasAtuaisViewPF = PFAtual.pfData.ondePrestaServicos.empresasAtuais;
    empresasAnterioresViewPF = PFAtual.pfData.ondePrestaServicos.empresasAnteriores;
    empresasFuturasViewPF = PFAtual.pfData.ondePrestaServicos.empresasFuturas;
    frotaVeiculosViewPF = PFAtual.pfData.frotaDeVeiculos;
    referenciasPessoaisViewPF = PFAtual.pfData.referenciaPessoal;


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
    document.getElementById('nome-pai-pf-view').value = PFAtual.pfData.dadosCadastrais.nomeDoPai;
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
    document.getElementById('telefone-fixo-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.telefoneFixo;
    document.getElementById('celular-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.celular;
    document.getElementById('tempo-residencia-atual-pf-view').value = PFAtual.pfData.endereco.enderecoAtual.tempoResidencial

    imovelProprioViewPF = PFAtual.pfData.endereco.enderecoAtual.imovelProprio;

    if(imovelProprioViewPF){
        document.getElementById('imovel-proprio-pf-sim-view').checked = true;
    } else {
        document.getElementById('imovel-proprio-pf-nao-view').checked = false;
    }


    document.getElementById('CEP-endereco-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.cep;
    document.getElementById('cidade-endereco-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.cidade;
    document.getElementById('rua-endereco-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.rua;
    document.getElementById('bairro-endereco-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.bairro;
    document.getElementById('numero-endereco-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.numero;
    document.getElementById('tempo-residencia-anterior-pf-view').value = PFAtual.pfData.endereco.enderecoAnterior.tempoDeResidencia;

    renderEmpresasAtuaisViewPF(empresaAtualContainerViewPF, empresasAtuaisViewPF);
    renderEmpresasAnterioresViewPF(empresaAnteriorContainerViewPF, empresasAnterioresViewPF);
    renderEmpresasFuturasViewPF(empresaFuturaContainerViewPF, empresasFuturasViewPF);
    renderFrotaViewPF (frotaVeiculoContainerViewPF,frotaVeiculosViewPF);
    renderReferenciasPessoaisViewPF(referenciaPessoalContainerViewPF, referenciasPessoaisViewPF);


    renderFrotaViewPF (frotaVeiculoContainerViewPJ,frotaVeiculosViewPJ);
            document.getElementById('quitado-veiculo-frota-pj-view').addEventListener('click',()=>{ 
                veiculoFrotaQuitadoViewPF = true;
                document.getElementById('nao-quitado-veiculo-frota-pj-view').checked = false;
            });
            document.getElementById('nao-quitado-veiculo-frota-pj-view').addEventListener('click',()=>{ 
                veiculoFrotaQuitadoViewPF = false;
                document.getElementById('quitado-veiculo-frota-pj-view').checked = false;
            });

    

    document.getElementById('marca-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.marca;
    document.getElementById('modelo-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.modelo;
    document.getElementById('ano-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.ano;
    document.getElementById('placa-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.placa;
    document.getElementById('valor-venda-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.valorDeVenda;
    document.getElementById('valor-molicar-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.valorDaMolicar;
    document.getElementById('valor-entrada-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.valorDeEntrada;
    document.getElementById('valor-financiado-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.valorFinanciado;
    document.getElementById('banco-aprovado-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.bancoAprovado;
    document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.condicoesAprovadas;
    document.getElementById('indicacao-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.indicacao;
    document.getElementById('data-conclusao-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.dataDeConclusao;
    document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf-view').value = PFAtual.pfData.veiculoAFinanciar.respostaNegativaCredito;
    document.getElementById('observacoes-pf-view').value = PFAtual.pfData.veiculoAFinanciar.observacoes;

}


document.getElementById('imovel-proprio-pf-sim-view').addEventListener('click',()=>{
    imovelProprioViewPF = true;
    document.getElementById('imovel-proprio-pf-nao-view').checked = false;
})
document.getElementById('imovel-proprio-pf-nao-view').addEventListener('click',()=>{
    imovelProprioViewPF = false;
    document.getElementById('imovel-proprio-pf-sim-view').checked = false;
})


function limpaViewPF(){
    cnpjViewPF = [];
    empresasAtuaisViewPF = [];
    empresasAnterioresViewPF = [];
    empresasFuturasViewPF = [];
    frotaVeiculosViewPF = [];
    referenciasPessoaisViewPF = [];
    veiculoFrotaQuitadoViewPF = null;
    imovelProprioViewPF = null;

    document.getElementById('modal-visualizacao-PF').style.display = "none";
    document.getElementById('pf-view').style.display = "none";

    document.getElementById('titulo-pf-view').innerHTML = "";

    document.getElementById('app').style.display = 'block';
}




document.getElementById('fecha-view-pf').addEventListener('click',()=>{
    // limpar campos;
    limpaViewPF();
})













document.getElementById('add-cnpj-pf-view').addEventListener('click', ()=>{
    cnpjViewPF.push(document.getElementById('cnpj-pf-view').value.replace(/[^\d]+/g,''));
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


























document.getElementById('add-empresa-atual-pf-view').addEventListener('click',()=>{
    empresasAtuaisViewPF.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-atual-pf-view').value,
        cep: document.getElementById('cep-empresa-atual-pf-view').value,
        cidade: document.getElementById('cidade-empresa-atual-pf-view').value,
        rua: document.getElementById('rua-empresa-atual-pf-view').value,
        bairro: document.getElementById('bairro-empresa-atual-pf-view').value,
        numero: document.getElementById('numero-empresa-atual-pf-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-atual-pf-view').value,
        celular: document.getElementById('celular-empresa-atual-pf-view').value,
        tempoDeServico: document.getElementById('tempo-empresa-atual-pf-view').value,
        faturamentoAtual: document.getElementById('faturamento-atual-empresa-atual-pf-view').value,
        faturamentoFuturo: document.getElementById('faturamento-futuro-empresa-atual-pf-view').value
    })

    document.getElementById('nome-empresa-atual-pf-view').value = "";
    document.getElementById('cep-empresa-atual-pf-view').value = "";
    document.getElementById('cidade-empresa-atual-pf-view').value = "";
    document.getElementById('rua-empresa-atual-pf-view').value = "";
    document.getElementById('bairro-empresa-atual-pf-view').value = "";
    document.getElementById('numero-empresa-atual-pf-view').value = "";
    document.getElementById('telefone-fixo-empresa-atual-pf-view').value = "";
    document.getElementById('celular-empresa-atual-pf-view').value = "";
    document.getElementById('tempo-empresa-atual-pf-view').value = "";
    document.getElementById('faturamento-atual-empresa-atual-pf-view').value = "";
    document.getElementById('faturamento-futuro-empresa-atual-pf-view').value = "";

    renderEmpresasAtuaisViewPF(empresaAtualContainerViewPF, empresasAtuaisViewPF);
})

function deleteEmpresaAtualViewPF(pos){
    empresasAtuaisViewPF.splice(pos, 1);
    renderEmpresasAtuaisViewPF(empresaAtualContainerViewPF, empresasAtuaisViewPF);
}

function renderEmpresasAtuaisViewPF(container,data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.cep}`);
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
        del.setAttribute('style', 'width: 90%;');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAtualViewPF(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}





















document.getElementById('add-empresa-anterior-pf-view').addEventListener('click',()=>{
    empresasAnterioresViewPF.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-anterior-pf-view').value,
        cep: document.getElementById('cep-empresa-anterior-pf-view').value,
        cidade: document.getElementById('cidade-empresa-anterior-pf-view').value,
        rua: document.getElementById('rua-empresa-anterior-pf-view').value,
        bairro: document.getElementById('bairro-empresa-anterior-pf-view').value,
        numero: document.getElementById('numero-empresa-anterior-pf-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-anterior-pf-view').value,
        celular: document.getElementById('celular-empresa-anterior-pf-view').value,
        tempoDeServico: document.getElementById('tempo-empresa-anterior-pf-view').value,
        salario: document.getElementById('salario-empresa-anterior-pf-view').value,
    })

    document.getElementById('nome-empresa-anterior-pf-view').value = "";
    document.getElementById('cep-empresa-anterior-pf-view').value = "";
    document.getElementById('cidade-empresa-anterior-pf-view').value = "";
    document.getElementById('rua-empresa-anterior-pf-view').value = "";
    document.getElementById('bairro-empresa-anterior-pf-view').value = "";
    document.getElementById('numero-empresa-anterior-pf-view').value = "";
    document.getElementById('telefone-fixo-empresa-anterior-pf-view').value = "";
    document.getElementById('celular-empresa-anterior-pf-view').value = "";
    document.getElementById('tempo-empresa-anterior-pf-view').value = "";
    document.getElementById('salario-empresa-anterior-pf-view').value = "";

    renderEmpresasAnterioresViewPF(empresaAnteriorContainerViewPF, empresasAnterioresViewPF);
})

function deleteEmpresaAnteriorViewPF(pos){
    empresasAnterioresViewPF.splice(pos, 1);
    renderEmpresasAnterioresViewPJ(empresaAnteriorContainerViewPF, empresasAnterioresViewPF);
}

function renderEmpresasAnterioresViewPF (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";


        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.cep}`);
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
        del.setAttribute('style', 'width: 90%;');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAnteriorViewPF(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}






















document.getElementById('add-empresa-futura-pf-view').addEventListener('click',()=>{
    empresasFuturasViewPF.push({
        nomeDaEmpresa: document.getElementById('nome-empresa-futura-pf-view').value,
        cep: document.getElementById('cep-empresa-futura-pf-view').value,
        cidade: document.getElementById('cidade-empresa-futura-pf-view').value,
        rua: document.getElementById('rua-empresa-futura-pf-view').value,
        bairro: document.getElementById('bairro-empresa-futura-pf-view').value,
        numero: document.getElementById('numero-empresa-futura-pf-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-empresa-futura-pf-view').value,
        celular: document.getElementById('celular-empresa-futura-pf-view').value,
        salario: document.getElementById('salario-empresa-futura-pf-view').value,
    })

    document.getElementById('nome-empresa-futura-pf-view').value = "";
    document.getElementById('cep-empresa-futura-pf-view').value = "";
    document.getElementById('cidade-empresa-futura-pf-view').value = "";
    document.getElementById('rua-empresa-anterior-pf-view').value = "";
    document.getElementById('bairro-empresa-futura-pf-view').value = "";
    document.getElementById('numero-empresa-futura-pf-view').value = "";
    document.getElementById('telefone-fixo-empresa-futura-pf-view').value = "";
    document.getElementById('celular-empresa-futura-pf-view').value = "";
    document.getElementById('salario-empresa-futura-pf-view').value = "";

    renderEmpresasFuturasViewPF(empresaFuturaContainerViewPF, empresasFuturasViewPF);
})

function deleteEmpresaFuturaViewPF(pos){
    empresasFuturasViewPF.splice(pos, 1);
    renderEmpresasFuturasViewPF(empresaFuturaContainerViewPF, empresasFuturasViewPF);
}

function renderEmpresasFuturasViewPF (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";


        let content = document.createElement('div');

            let cep = document.createElement('p');
                cepValue = document.createTextNode(`CEP: ${element.cep}`);
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
        del.setAttribute('style', 'width: 90%;');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaFuturaViewPF(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}





















document.getElementById('add-veiculo-frota-pf-view').addEventListener('click',()=>{
    frotaVeiculosViewPF.push({
        ano: document.getElementById('ano-veiculo-frota-pf-view').value,
        marca: document.getElementById('marca-veiculo-frota-pf-view').value,
        modelo: document.getElementById('modelo-veiculo-frota-pf-view').value,
        placa: document.getElementById('placa-veiculo-frota-pf-view').value,
        quitado: veiculoFrotaQuitadoViewPF,
        tempoEmNome: document.getElementById('tempo-em-nome-veiculo-frota-pf-view').value,
        bco: document.getElementById('bco-veiculo-frota-pf-view').value,
        plano: document.getElementById('plano-veiculo-frota-pf-view').value,
        valorParcela: document.getElementById('valor-parcela-veiculo-frota-pf-view').value,
        parcelasPagas: document.getElementById('parcelas-pagas-veiculo-frota-pf-view').value
    })

    renderFrotaViewPF (frotaVeiculoContainerViewPF,frotaVeiculosViewPF);

    document.getElementById('ano-veiculo-frota-pf-view').value = "";
    document.getElementById('marca-veiculo-frota-pf-view').value = "";
    document.getElementById('modelo-veiculo-frota-pf-view').value = "";
    document.getElementById('placa-veiculo-frota-pf-view').value = "";
    document.getElementById('tempo-em-nome-veiculo-frota-pf-view').value = "";
    document.getElementById('quitado-veiculo-frota-pf-view').checked = false;
    document.getElementById('nao-quitado-veiculo-frota-pf-view').checked = false;
    veiculoFrotaQuitadoViewPF = null;
    document.getElementById('bco-veiculo-frota-pf-view').value = "";
    document.getElementById('plano-veiculo-frota-pf-view').value = "";
    document.getElementById('valor-parcela-veiculo-frota-pf-view').value = "";
    document.getElementById('parcelas-pagas-veiculo-frota-pf-view').value = "";

})

function deleteFrotaViewPF(pos){
    frotaVeiculosViewPF.splice(pos,1);
    renderFrotaViewPF (frotaVeiculoContainerViewPF,frotaVeiculosViewPF);
}

function renderFrotaViewPF(container,data){
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


            let bco = document.createElement('p');
                bcoValue = document.createTextNode(`BCO: ${element.bco}`);
                bco.appendChild(bcoValue);

            let plano = document.createElement('p');
                planoValue = document.createTextNode(`Plano: ${element.plano}`);
                plano.appendChild(planoValue);


            let valorParcela = document.createElement('p');
                valorParcelaValue = document.createTextNode(`Valor da parcela: ${element.valorParcela}`);
                valorParcela.appendChild(valorParcelaValue);

            let parcelasPagas = document.createElement('p');
                parcelasPagasValue = document.createTextNode(`Parcelas pagas: ${element.parcelasPagas}`);
                parcelasPagas.appendChild(parcelasPagasValue);


            content.appendChild(marca)
            content.appendChild(modelo);
            content.appendChild(ano);
            content.appendChild(placa);
            content.appendChild(tempoEmNome);
            content.appendChild(veiculoQuitado);
            content.appendChild(bco);
            content.appendChild(plano);
            content.appendChild(valorParcela);
            content.appendChild(parcelasPagas);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.setAttribute('style', 'width: 90%;');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFrotaViewPF(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })

}

























document.getElementById('add-referencia-pessoal-pf-view').addEventListener('click',()=>{
    referenciasPessoaisViewPF.push({
        nome: document.getElementById('nome-referencia-pessoal-pf-view').value,
        telefoneFixo: document.getElementById('telefone-fixo-referencia-pessoal-pf-view').value,
        celular: document.getElementById('celular-referencia-pessoal-pf-view').value
    })

    document.getElementById('nome-referencia-pessoal-pf-view').value = "";
    document.getElementById('telefone-fixo-referencia-pessoal-pf-view').value = "";
    document.getElementById('celular-referencia-pessoal-pf-view').value = "";

    renderReferenciasPessoaisViewPF(referenciaPessoalContainerViewPF, referenciasPessoaisViewPF);
})

function deleteReferenciaPessoalViewPF(pos){
    referenciasPessoaisViewPF.splice(pos,1);
    renderReferenciasPessoaisViewPF(referenciaPessoalContainerViewPF, referenciasPessoaisViewPF);
}




function renderReferenciasPessoaisViewPF(container,data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
            li.style.border = "solid 1px black";
            li.style.margin = "5px";
            li.style.borderRadius = "5px";
            li.style.padding = "5px";

        let content = document.createElement('div');
            

            let nome = document.createElement('p');
                nomeValue = document.createTextNode(`Empresa: ${element.nome}`);
                nome.appendChild(nomeValue);

            let telefoneFixo = document.createElement('p')
                telefoneFixoValue = document.createTextNode(`Telefone Fixo: ${element.telefoneFixo}`);
                telefoneFixo.appendChild(telefoneFixoValue);

            let celular = document.createElement('p')
                celularValue = document.createTextNode(`Celular: ${element.celular}`);
                celular.appendChild(celularValue);


            content.appendChild(nome);
            content.appendChild(telefoneFixo)
            content.appendChild(celular);;

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.setAttribute('style', 'width: 90%;');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteReferenciaPessoalViewPF(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}






















document.getElementById('atualiza-cadastro-pf').addEventListener('click', async ()=>{
    let updatedPF = {
        dadosCadastrais : {
            nomeCompleto : document.getElementById('nome-completo-pf-view').value,
            CPF : document.getElementById('CPF-pf-view').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-pf-view').value,
            CNPJ : cnpjViewPF,
            RG : document.getElementById('RG-pf-view').value,
            dataDeNascimento : document.getElementById('data-nascimento-pf-view').value,
            estadoCivil : document.getElementById('estado-civil-pf-view').value,
            naturalidade : document.getElementById('naturalidade-pf-view').value,
            nomeDoPai : document.getElementById('nome-pai-pf-view').value,
            nomeDaMae : document.getElementById('nome-mae-pf-view').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-pf-view').value,
            agencia : document.getElementById('agencia-pf-view').value,
            contaCorrente : {
                numero : document.getElementById('numero-conta-pf-view').value,
                digito : document.getElementById('digito-conta-pf-view').value,
            },
            tempoDeConta : document.getElementById('tempo-conta-pf-view').value,
            telefoneDaAgencia : document.getElementById('telefone-agencia-pf-view').value
        },
        endereco : {
            enderecoAtual : {
                cep : document.getElementById('CEP-endereco-atual-pf-view').value,
                cidade : document.getElementById('cidade-endereco-atual-pf-view').value,
                rua : document.getElementById('rua-endereco-atual-pf-view').value,
                bairro : document.getElementById('bairro-endereco-atual-pf-view').value,
                numero : document.getElementById('numero-endereco-atual-pf-view').value,
                telefoneFixo : document.getElementById('telefone-fixo-pf-view').value,
                celular : document.getElementById('celular-pf-view').value,
                tempoResidencial : document.getElementById('tempo-residencia-atual-pf-view').value,
                imovelProprio : imovelProprioStatePF,
                valorDoImovel : document.getElementById('valor-imovel-residencia-atual-pf').value
            },
            enderecoAnterior : {
                cep : document.getElementById('CEP-endereco-anterior-pf-view').value,
                cidade : document.getElementById('cidade-endereco-anterior-pf-view').value,
                rua : document.getElementById('rua-endereco-anterior-pf-view').value,
                bairro : document.getElementById('bairro-endereco-anterior-pf-view').value,
                numero : document.getElementById('numero-endereco-anterior-pf-view').value,
                tempoDeResidencia : document.getElementById('tempo-residencia-anterior-pf-view').value
            }
        },
        ondePrestaServicos : {
            empresasAtuais : empresasAtuaisViewPF,
            empresasAnteriores : empresasAnterioresViewPF,
            empresasFuturas : empresasFuturasViewPF
        },
        referenciaPessoal: referenciasPessoaisViewPF,
        frotaDeVeiculos : frotaVeiculosViewPF,
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pf-view').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pf-view').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pf-view').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pf-view').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pf-view').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pf-view').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pf-view').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pf-view').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pf-view').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf-view').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pf-view').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pf-view').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf-view').value,
            observacoes : document.getElementById('observacoes-pf-view').value
        }
    }

    //let ID = updatedPJ.dadosCadastrais.CNPJ;
    await createPF(updatedPF);

    cardsData = await getAllPF(6);
    renderCardsPF(cardsContainerPF,cardsData);


    limpaViewPF();
})













document.getElementById('exclui-cadastro-pf').addEventListener('click',async ()=>{
    let ID = document.getElementById('CPF-pf-view').value.replace(/[^\d]+/g,'');

    await deletePF(ID);

    cardsData = await getAllPF(6);
    renderCardsPF(cardsContainerPF,cardsData);
    limpaViewPF();
})



document.getElementById('abre-email-pf').addEventListener('click',()=>{
    document.getElementById('modal-email-PF').style.display = "block";
})


document.getElementById('cancela-email-pf').addEventListener('click',()=>{
    document.getElementById('destinatario-email-PF').value = '';
    document.getElementById('assunto-email-PF').value = '';
    document.getElementById('modal-email-PF').style.display = "none"
})





document.getElementById('envia-email-pf').addEventListener('click', async ()=>{

    let mailData = {
        dadosCadastrais : {
            nomeCompleto : document.getElementById('nome-completo-pf-view').value,
            CPF : document.getElementById('CPF-pf-view').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-pf-view').value,
            CNPJ : mailerizeCpfCnpj(cnpjViewPF),
            RG : document.getElementById('RG-pf-view').value,
            dataDeNascimento : document.getElementById('data-nascimento-pf-view').value,
            estadoCivil : document.getElementById('estado-civil-pf-view').value,
            naturalidade : document.getElementById('naturalidade-pf-view').value,
            nomeDoPai : document.getElementById('nome-pai-pf-view').value,
            nomeDaMae : document.getElementById('nome-mae-pf-view').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-pf-view').value,
            agencia : document.getElementById('agencia-pf-view').value,
            contaCorrente : {
                numero : document.getElementById('numero-conta-pf-view').value,
                digito : document.getElementById('digito-conta-pf-view').value,
            },
            tempoDeConta : document.getElementById('tempo-conta-pf-view').value,
            telefoneDaAgencia : document.getElementById('telefone-agencia-pf-view').value
        },
        endereco : {
            enderecoAtual : {
                cep : document.getElementById('CEP-endereco-atual-pf-view').value,
                cidade : document.getElementById('cidade-endereco-atual-pf-view').value,
                rua : document.getElementById('rua-endereco-atual-pf-view').value,
                bairro : document.getElementById('bairro-endereco-atual-pf-view').value,
                numero : document.getElementById('numero-endereco-atual-pf-view').value,
                telefoneFixo : document.getElementById('telefone-fixo-pf-view').value,
                celular : document.getElementById('celular-pf-view').value,
                tempoResidencial : document.getElementById('tempo-residencia-atual-pf-view').value,
                imovelProprio : imovelProprioStatePF,
                valorDoImovel : document.getElementById('valor-imovel-residencia-atual-pf').value
            },
            enderecoAnterior : {
                cep : document.getElementById('CEP-endereco-anterior-pf-view').value,
                cidade : document.getElementById('cidade-endereco-anterior-pf-view').value,
                rua : document.getElementById('rua-endereco-anterior-pf-view').value,
                bairro : document.getElementById('bairro-endereco-anterior-pf-view').value,
                numero : document.getElementById('numero-endereco-anterior-pf-view').value,
                tempoDeResidencia : document.getElementById('tempo-residencia-anterior-pf-view').value
            }
        },
        ondePrestaServicos : {
            empresasAtuais : mailerizeEmpresasAtuais(empresasAtuaisViewPF),
            empresasAnteriores : mailerizeEmpresasAnteriores(empresasAnterioresViewPF),
            empresasFuturas : mailerizeEmpresasFuturas(empresasFuturasViewPF)
        },
        referenciaPessoal: mailerizeReferenciasPessoais(referenciasPessoaisViewPF),
        frotaDeVeiculos : mailerizeFrotaVeiculos(frotaVeiculosViewPF),
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pf-view').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pf-view').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pf-view').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pf-view').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pf-view').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pf-view').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pf-view').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pf-view').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pf-view').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf-view').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pf-view').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pf-view').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf-view').value,
            observacoes : document.getElementById('observacoes-pf-view').value
        }
    }
     
    await axios.post('https://automate-heroku-renan.herokuapp.com/mail',{
         destino: `${document.getElementById('destinatario-email-PF').value}`,
         assunto: `${document.getElementById('assunto-email-PF').value}`,
         corpo: `
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Dados cadastrais</h1>
                    <p><b>Nome completo: </b>${mailData.dadosCadastrais.nomeCompleto}</p>
                    <p><b>CPF: </b>${mailData.dadosCadastrais.CPF}</p>
                    <p><b>E-Mail: </b>${mailData.dadosCadastrais.email}</p>
                    <p><b>CNPJ: </b>${mailData.dadosCadastrais.CNPJ}</p>
                    <p><b>RG: </b>${mailData.dadosCadastrais.RG}</p>
                    <p><b>Data de nascimento: </b>${mailData.dadosCadastrais.dataDeNascimento}</p>
                    <p><b>Estado Civil: </b>${mailData.dadosCadastrais.estadoCivil}</p>
                    <p><b>Naturalidade: </b>${mailData.dadosCadastrais.naturalidade}</p>
                    <p><b>Nome do pai: </b>${mailData.dadosCadastrais.nomeDoPai}</p>
                    <p><b>Nome da mãe: </b>${mailData.dadosCadastrais.nomeDaMae}</p>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Dados Bancários</h1>
                    <p><b>Banco: </b>${mailData.dadosBancarios.banco}</p>
                    <p><b>Agência: </b>${mailData.dadosBancarios.agencia}</p>
                    <p><b>Conta Corrente:</b><br> <b>Número: </b>${mailData.dadosBancarios.contaCorrente.numero} <b>Dígito: </b>${mailData.dadosBancarios.contaCorrente.digito}</p>
                    <p><b>Tempo de conta: </b>${mailData.dadosBancarios.tempoDeConta}</p>
                    <p><b>Telefône da agência: </b>${mailData.dadosBancarios.telefoneDaAgencia}</p>
                </div>
            
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Endereço</h1>
            
                    <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                        <h2>Endereço atual</h2>
                        <p><b>CEP: </b>${mailData.endereco.enderecoAtual.cep}</p>
                        <p><b>Cidade: </b>${mailData.endereco.enderecoAtual.cidade}</p>
                        <p><b>Rua: </b>${mailData.endereco.enderecoAtual.rua}</p>
                        <p><b>Bairro: </b>${mailData.endereco.enderecoAtual.bairro}</p>
                        <p><b>Número: </b>${mailData.endereco.enderecoAtual.numero}</p>
                        <p><b>Telefone Fixo: </b>${mailData.endereco.enderecoAtual.telefoneFixo}</p>
                        <p><b>Celular: </b>${mailData.endereco.enderecoAtual.celular}</p>
                        <p><b>Tempo residencial: </b>${mailData.endereco.enderecoAtual.tempoResidencial}</p>
                        <p><b>Imovel próprio?: </b>${verifyBoolean(mailData.endereco.enderecoAtual.imovelProprio)}</p>
                        <p><b>Valor do imóvel: </b>${mailData.endereco.enderecoAtual.valorDoImovel}</p>
                    </div>
            
                    <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                        <h2>Endereço anterior</h2>
                        <p><b>CEP: </b>${mailData.endereco.enderecoAnterior.cep}</p>
                        <p><b>Cidade: </b>${mailData.endereco.enderecoAnterior.cidade}</p>
                        <p><b>Rua: </b>${mailData.endereco.enderecoAnterior.rua}</p>
                        <p><b>Bairro: </b>${mailData.endereco.enderecoAnterior.bairro}</p>
                        <p><b>Numero: </b>${mailData.endereco.enderecoAnterior.numero}</p>
                        <p><b>Tempo de residência: </b>${mailData.endereco.enderecoAnterior.tempoDeResidencia}</p>
                    </div>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Onde presta serviços</h1>
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
                    <h1>Referencias pessoais</h1>
                    <p>${mailData.referenciaPessoal}</p>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Veiculo à financiar</h1>
            
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

     document.getElementById('destinatario-email-PF').value = '';
     document.getElementById('assunto-email-PF').value = '';

     document.getElementById('modal-email-PF').style.display = "none"
     
  })



  function verifyBoolean(value){
      if (value){
          return 'Sim'
      } else {
          return 'Não'
      }
  }



  function mailerizeCpfCnpj(CpfCnpj){
    let serialized = [];
    CpfCnpj.forEach(element=>{
      serialized.push(`<p style="page-break-inside: avoid;">${element}</p>`);
    })
    return serialized.join('');
  }











  function mailerizeEmpresasAtuais(empresasAtuais){
    let serialized = [];
    empresasAtuais.forEach(element=>{
      serialized.push(`
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
            <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
            <p><b>CEP: </b>${element.cep}</p>
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





  function mailerizeEmpresasAnteriores(empresasAnteriores){
    let serialized = [];
    empresasAnteriores.forEach(element=>{
      serialized.push(`
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
            <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
            <p><b>CEP: </b>${element.cep}</p>
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

  function mailerizeEmpresasFuturas(empresasFuturas){
    let serialized = [];
    empresasFuturas.forEach(element=>{
      serialized.push(`
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
            <p><b>Nome da empresa: </b>${element.nomeDaEmpresa}</p>
            <p><b>CEP: </b>${element.cep}</p>
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


  function mailerizeReferenciasPessoais(referenciasPessoais){
    let serialized = [];
    referenciasPessoais.forEach(element=>{
      serialized.push(`
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
            <p><b>Nome: </b>${element.nome}</p>
            <p><b>Telefone Fixo: </b>${element.telefoneFixo}</p>
            <p><b>Celular: </b>${element.celular}</p>
        </div>
            
        `);
    })
    return serialized.join('');
  }





  function mailerizeFrotaVeiculos(frotaVeiculos){
    let serialized = [];
    
    frotaVeiculos.forEach(element=>{
      let quitado;
        if(element.quitado){
          quitado = 'Sim'
        } else {
          quitado = 'Não'
        }
      serialized.push(`
        <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
            <p><b>Marca: </b>${element.marca}</p>
            <p><b>Modelo: </b>${element.modelo}</p>
            <p><b>Placa: </b>${element.placa}</p>
            <p><b>Quitado: </b>${quitado}</p>
            <p><b>BCO: </b>${element.bco}</p>
            <p><b>Plano: </b>${element.plano}</p>
            <p><b>Valor da parcela: </b>${element.valorParcela}</p>
            <p><b>Parcelas pagas: </b>${element.parcelasPagas}</p>
        </div>
        `);
    })
    return serialized.join('');
  }







  document.getElementById('imprime-registro-pf').addEventListener('click', ()=>{
    let mailData = {
        dadosCadastrais : {
            nomeCompleto : document.getElementById('nome-completo-pf-view').value,
            CPF : document.getElementById('CPF-pf-view').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-pf-view').value,
            CNPJ : mailerizeCpfCnpj(cnpjViewPF),
            RG : document.getElementById('RG-pf-view').value,
            dataDeNascimento : document.getElementById('data-nascimento-pf-view').value,
            estadoCivil : document.getElementById('estado-civil-pf-view').value,
            naturalidade : document.getElementById('naturalidade-pf-view').value,
            nomeDoPai : document.getElementById('nome-pai-pf-view').value,
            nomeDaMae : document.getElementById('nome-mae-pf-view').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-pf-view').value,
            agencia : document.getElementById('agencia-pf-view').value,
            contaCorrente : {
                numero : document.getElementById('numero-conta-pf-view').value,
                digito : document.getElementById('digito-conta-pf-view').value,
            },
            tempoDeConta : document.getElementById('tempo-conta-pf-view').value,
            telefoneDaAgencia : document.getElementById('telefone-agencia-pf-view').value
        },
        endereco : {
            enderecoAtual : {
                cep : document.getElementById('CEP-endereco-atual-pf-view').value,
                cidade : document.getElementById('cidade-endereco-atual-pf-view').value,
                rua : document.getElementById('rua-endereco-atual-pf-view').value,
                bairro : document.getElementById('bairro-endereco-atual-pf-view').value,
                numero : document.getElementById('numero-endereco-atual-pf-view').value,
                telefoneFixo : document.getElementById('telefone-fixo-pf-view').value,
                celular : document.getElementById('celular-pf-view').value,
                tempoResidencial : document.getElementById('tempo-residencia-atual-pf-view').value,
                imovelProprio : imovelProprioStatePF,
                valorDoImovel : document.getElementById('valor-imovel-residencia-atual-pf').value
            },
            enderecoAnterior : {
                cep : document.getElementById('CEP-endereco-anterior-pf-view').value,
                cidade : document.getElementById('cidade-endereco-anterior-pf-view').value,
                rua : document.getElementById('rua-endereco-anterior-pf-view').value,
                bairro : document.getElementById('bairro-endereco-anterior-pf-view').value,
                numero : document.getElementById('numero-endereco-anterior-pf-view').value,
                tempoDeResidencia : document.getElementById('tempo-residencia-anterior-pf-view').value
            }
        },
        ondePrestaServicos : {
            empresasAtuais : mailerizeEmpresasAtuais(empresasAtuaisViewPF),
            empresasAnteriores : mailerizeEmpresasAnteriores(empresasAnterioresViewPF),
            empresasFuturas : mailerizeEmpresasFuturas(empresasFuturasViewPF)
        },
        referenciaPessoal: mailerizeReferenciasPessoais(referenciasPessoaisViewPF),
        frotaDeVeiculos : mailerizeFrotaVeiculos(frotaVeiculosViewPF),
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pf-view').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pf-view').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pf-view').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pf-view').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pf-view').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pf-view').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pf-view').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pf-view').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pf-view').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf-view').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pf-view').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pf-view').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf-view').value,
            observacoes : document.getElementById('observacoes-pf-view').value
        }
    }

    let conteudo = innerHTML = 

    `
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
                    <h1>Dados cadastrais</h1>
                    <p><b>Nome completo: </b>${mailData.dadosCadastrais.nomeCompleto}</p>
                    <p><b>CPF: </b>${mailData.dadosCadastrais.CPF}</p>
                    <p><b>E-Mail: </b>${mailData.dadosCadastrais.email}</p>
                    <p><b>CNPJ: </b>${mailData.dadosCadastrais.CNPJ}</p>
                    <p><b>RG: </b>${mailData.dadosCadastrais.RG}</p>
                    <p><b>Data de nascimento: </b>${mailData.dadosCadastrais.dataDeNascimento}</p>
                    <p><b>Estado Civil: </b>${mailData.dadosCadastrais.estadoCivil}</p>
                    <p><b>Naturalidade: </b>${mailData.dadosCadastrais.naturalidade}</p>
                    <p><b>Nome do pai: </b>${mailData.dadosCadastrais.nomeDoPai}</p>
                    <p><b>Nome da mãe: </b>${mailData.dadosCadastrais.nomeDaMae}</p>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
                    <h1>Dados Bancários</h1>
                    <p><b>Banco: </b>${mailData.dadosBancarios.banco}</p>
                    <p><b>Agência: </b>${mailData.dadosBancarios.agencia}</p>
                    <p><b>Conta Corrente:</b><br> <b>Número: </b>${mailData.dadosBancarios.contaCorrente.numero} <b>Dígito: </b>${mailData.dadosBancarios.contaCorrente.digito}</p>
                    <p><b>Tempo de conta: </b>${mailData.dadosBancarios.tempoDeConta}</p>
                    <p><b>Telefône da agência: </b>${mailData.dadosBancarios.telefoneDaAgencia}</p>
                </div>
            
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Endereço</h1>
            
                    <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
                        <h2>Endereço atual</h2>
                        <p><b>CEP: </b>${mailData.endereco.enderecoAtual.cep}</p>
                        <p><b>Cidade: </b>${mailData.endereco.enderecoAtual.cidade}</p>
                        <p><b>Rua: </b>${mailData.endereco.enderecoAtual.rua}</p>
                        <p><b>Bairro: </b>${mailData.endereco.enderecoAtual.bairro}</p>
                        <p><b>Número: </b>${mailData.endereco.enderecoAtual.numero}</p>
                        <p><b>Telefone Fixo: </b>${mailData.endereco.enderecoAtual.telefoneFixo}</p>
                        <p><b>Celular: </b>${mailData.endereco.enderecoAtual.celular}</p>
                        <p><b>Tempo residencial: </b>${mailData.endereco.enderecoAtual.tempoResidencial}</p>
                        <p><b>Imovel próprio?: </b>${verifyBoolean(mailData.endereco.enderecoAtual.imovelProprio)}</p>
                        <p><b>Valor do imóvel: </b>${mailData.endereco.enderecoAtual.valorDoImovel}</p>
                    </div>
            
                    <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
                        <h2>Endereço anterior</h2>
                        <p><b>CEP: </b>${mailData.endereco.enderecoAnterior.cep}</p>
                        <p><b>Cidade: </b>${mailData.endereco.enderecoAnterior.cidade}</p>
                        <p><b>Rua: </b>${mailData.endereco.enderecoAnterior.rua}</p>
                        <p><b>Bairro: </b>${mailData.endereco.enderecoAnterior.bairro}</p>
                        <p><b>Numero: </b>${mailData.endereco.enderecoAnterior.numero}</p>
                        <p><b>Tempo de residência: </b>${mailData.endereco.enderecoAnterior.tempoDeResidencia}</p>
                    </div>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%;">
                    <h1>Onde presta serviços</h1>
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
                    <h1>Referencias pessoais</h1>
                    <p>${mailData.referenciaPessoal}</p>
                </div>
            
                <div style = "padding: 10px; border: solid 1px black; border-radius: 5px; margin: 10px auto; width: 50%; page-break-inside: avoid;">
                    <h1>Veiculo à financiar</h1>
            
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
    `;

    tela_impressao = window.open('about:blank');

        tela_impressao.document.write(conteudo);
        //ela_impressao.window.print();
        tela_impressao.alert("Pressione CTRL + P para imprimir");


  })