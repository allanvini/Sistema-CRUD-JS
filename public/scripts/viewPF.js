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
}




document.getElementById('fecha-view-pf').addEventListener('click',()=>{
    // limpar campos;
    limpaViewPF();
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
        tempoEmNome: document.getElementById('tempo-em-nome-veiculo-frota-pf-view').value
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
         destino: "allanvinisilva@gmail.com",
         assunto: `Dados do cliente: ${mailData.dadosCadastrais.nomeCompleto}`,
         corpo: `<h4>Dados cadastrais</h4>
                 <br>
                 <p>Nome completo: ${mailData.dadosCadastrais.nomeCompleto}</p>
                 <br>
                 <p>CPF: ${mailData.dadosCadastrais.CPF}</p>
                 <br>
                 <p>E-Mail: ${mailData.dadosCadastrais.email}</p>
                 <br>
                 <p>CNPJ: ${mailData.dadosCadastrais.CNPJ}</p>
                 <br>
                 <p>RG: ${mailData.dadosCadastrais.RG}</p>
                 <br>
                 <p>Data de nascimento: ${mailData.dadosCadastrais.dataDeNascimento}</p>
                 <br>
                 <p>Estado Civil: ${mailData.dadosCadastrais.estadoCivil}</p>
                 <br>
                 <p>Naturalidade: ${mailData.dadosCadastrais.naturalidade}</p>
                 <br>
                 <p>Nome do pai: ${mailData.dadosCadastrais.nomeDoPai}</p>
                 <br>
                 <p>Nome da mãe: ${mailData.dadosCadastrais.nomeDaMae}</p>
                 <br><br>
                 <h4>Dados Bancários</h4>
                 <br>
                 <p>Banco: ${mailData.dadosBancarios.banco}</p>
                 <br>
                 <p>Agência: ${mailData.dadosBancarios.agencia}</p>
                 <br>
                 <p>Conta Corrente:<br> Número: ${mailData.dadosBancarios.contaCorrente.numero} Dígito: ${mailData.dadosBancarios.contaCorrente.digito}</p>
                 <br>
                 <p>Tempo de conta: ${mailData.dadosBancarios.tempoDeConta}</p>
                 <br>
                 <p>Telefône da agência: ${mailData.dadosBancarios.telefoneDaAgencia}</p>
                 <br><br>
                 <h4>Endereço</h4>
                 <br>
                 <h5>Endereço atual</h5>
                 <br>
                 <p>CEP: ${mailData.endereco.enderecoAtual.cep}</p>
                 <br>
                 <p>Cidade: ${mailData.endereco.enderecoAtual.cidade}</p>
                 <br>
                 <p>Rua: ${mailData.endereco.enderecoAtual.rua}</p>
                 <br>
                 <p>Bairro: ${mailData.endereco.enderecoAtual.bairro}</p>
                 <br>
                 <p>Número: ${mailData.endereco.enderecoAtual.numero}</p>
                 <br>
                 <p>Telefone Fixo: ${mailData.endereco.enderecoAtual.telefoneFixo}</p>
                 <br>
                 <p>Celular: ${mailData.endereco.enderecoAtual.celular}</p>
                 <br>
                 <p>Tempo residencial: ${mailData.endereco.enderecoAtual.tempoResidencial}</p>
                 <br>
                 <p>Imovel próprio?: ${verifyBoolean(mailData.endereco.enderecoAtual.imovelProprio)}</p>
                 <br>
                 <p>Valor do imóvel: ${mailData.endereco.enderecoAtual.valorDoImovel}</p>
                 <br>
                 <h5>Endereço anterior</h5>
                 <br>
                 <p>CEP: ${mailData.endereco.enderecoAnterior.cep}</p>
                 <br>
                 <p>Cidade: ${mailData.endereco.enderecoAnterior.cidade}</p>
                 <br>
                 <p>Rua: ${mailData.endereco.enderecoAnterior.rua}</p>
                 <br>
                 <p>Bairro: ${mailData.endereco.enderecoAnterior.bairro}</p>
                 <br>
                 <p>Numero: ${mailData.endereco.enderecoAnterior.numero}</p>
                 <br>
                 <p>Tempo de residência: ${mailData.endereco.enderecoAnterior.tempoDeResidencia}</p>
                 <br>
                 <h4>Onde presta serviços</h4>
                 <br>
                 <h5>Empresas atuais</h5>
                 <br>
                 <p>${mailData.ondePrestaServicos.empresasAtuais}</p>
                 <br>
                 <h5>Empresas anteriores</h5>
                 <br>
                 <p>${mailData.ondePrestaServicos.empresasAnteriores}</p>
                 <br>
                 <h5>Empresas futuras</h5>
                 <br>
                 <p>${mailData.ondePrestaServicos.empresasFuturas}</p>
                 <br>
                 <h4>Frota de veiculos</h4>
                 <p>${mailData.frotaDeVeiculos}</p>
                 <br>
                 <h4>Referencias pessoais</h4>
                 <br>
                 <p>${mailData.referenciaPessoal}</p>
                 <br>
                 <h4>Veiculo à financiar</h4>
                 <br>
                 <p>Marca: ${mailData.veiculoAFinanciar.marca}</p>
                 <br>
                 <p>Modelo: ${mailData.veiculoAFinanciar.modelo}</p>
                 <br>
                 <p>Ano: ${mailData.veiculoAFinanciar.ano}</p>
                 <br>
                 <p>Placa: ${mailData.veiculoAFinanciar.placa}</p>
                 <br>
                 <p>Valor de venda: ${mailData.veiculoAFinanciar.valorDeVenda}</p>
                 <br>
                 <p>Valor da molicar: ${mailData.veiculoAFinanciar.valorDaMolicar}</p>
                 <br>
                 <p>Valor de entrada: ${mailData.veiculoAFinanciar.valorDeEntrada}</p>
                 <br>
                 <p>Valor financiado: ${mailData.veiculoAFinanciar.valorFinanciado}</p>
                 <br>
                 <p>Banco aprovado: ${mailData.veiculoAFinanciar.bancoAprovado}</p>
                 <br>
                 <p>Condições aprovadas: ${mailData.veiculoAFinanciar.condicoesAprovadas}</p>
                 <br>
                 <p>Indicação: ${mailData.veiculoAFinanciar.indicacao}</p>
                 <br>
                 <p>Data de conclusão: ${mailData.veiculoAFinanciar.dataDeConclusao}</p>
                 <br>
                 <p>Resposta de negativa de credito: ${mailData.veiculoAFinanciar.respostaNegativaCredito}</p>
                 <br>
                 <p>Observações: ${mailData.veiculoAFinanciar.observacoes}</p>
                 <br>
                `
     })
     .then((response)=>{
         console.log(response);
     }, (error)=>{
         console.log(error);
     });
     
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
      serialized.push(`<p>${element}</p>`);
    })
    return serialized.join('');
  }











  function mailerizeEmpresasAtuais(empresasAtuais){
    let serialized = [];
    empresasAtuais.forEach(element=>{
      serialized.push(
        `<p>Nome da empresa: ${element.nomeDaEmpresa}</p>
        <br>
        <p>CEP: ${element.cep}</p>
        <br>
        <p>Cidade: ${element.cidade}</p>
        <br>
        <p>Rua: ${element.rua}</p>
        <br>
        <p>Bairro: ${element.bairro}</p>
        <br>
        <p>Numero: ${element.numero}</p>
        <br>
        <p>Telefone Fixo: ${element.telefoneFixo}</p>
        <br>
        <p>Celular: ${element.celular}</p>
        <br>
        <p>Tempo de serviço: ${element.tempoDeServico}</p>
        <br>
        <p>Faturamento Atual: ${element.faturamentoAtual}</p>
        <br>
        <p>Faturamento Futuro: ${element.faturamentoFuturo}</p>
        <br><br>`);
    })
    return serialized.join('');
  }





  function mailerizeEmpresasAnteriores(empresasAnteriores){
    let serialized = [];
    empresasAnteriores.forEach(element=>{
      serialized.push(
        `<p>Nome da empresa: ${element.nomeDaEmpresa}</p>
        <br>
        <p>CEP: ${element.cep}</p>
        <br>
        <p>Cidade: ${element.cidade}</p>
        <br>
        <p>Rua: ${element.rua}</p>
        <br>
        <p>Bairro: ${element.bairro}</p>
        <br>
        <p>Numero: ${element.numero}</p>
        <br>
        <p>Telefone Fixo: ${element.telefoneFixo}</p>
        <br>
        <p>Celular: ${element.celular}</p>
        <br>
        <p>Tempo de serviço: ${element.tempoDeServico}</p>
        <br>
        <p>Salario: ${element.salario}</p>
        <br><br>`);
    })
    return serialized.join('');
  }

  function mailerizeEmpresasFuturas(empresasFuturas){
    let serialized = [];
    empresasFuturas.forEach(element=>{
      serialized.push(
        `<p>Nome da empresa: ${element.nomeDaEmpresa}</p>
        <br>
        <p>CEP: ${element.cep}</p>
        <br>
        <p>Cidade: ${element.cidade}</p>
        <br>
        <p>Rua: ${element.rua}</p>
        <br>
        <p>Bairro: ${element.bairro}</p>
        <br>
        <p>Numero: ${element.numero}</p>
        <br>
        <p>Telefone Fixo: ${element.telefoneFixo}</p>
        <br>
        <p>Celular: ${element.celular}</p>
        <br>
        <p>Salario: ${element.salario}</p>
        <br><br>`);
    })
    return serialized.join('');
  }


  function mailerizeReferenciasPessoais(referenciasPessoais){
    let serialized = [];
    referenciasPessoais.forEach(element=>{
      serialized.push(
        `<p>Nome: ${element.nome}</p>
        <br>
        <p>Telefone Fixo: ${element.telefoneFixo}</p>
        <br>
        <p>Celular: ${element.celular}</p>
        <br><br>`);
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
  
      serialized.push(
        `<p>Marca: ${element.marca}</p>
        <br>
        <p>Modelo: ${element.modelo}</p>
        <br>
        <p>Placa: ${element.placa}</p>
        <br>
        <p>Quitado: ${quitado}</p>
        <br>
        <p>Tempo em nome: ${element.tempoEmNome}</p>
        <br><br>`);
    })
    return serialized.join('');
  }