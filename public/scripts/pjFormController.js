let cancelaCadastroPJ = document.getElementById('cancela-cadastro-pj');
let finalizaCadastroPJ = document.getElementById('conclui-cadastro-pj');

let cpfContainerPJ = document.getElementById('cpf-pego');
let faturamentoContainerPJ = document.getElementById('faturamento-pego');
let empresaAtualContainerPJ = document.getElementById('empresas-atuais-pego-pj');
let empresaAnteriorContainerPJ = document.getElementById('empresas-anterior-pego-pj');
let empresaFuturaContainerPJ = document.getElementById('empresas-futura-pego-pj');
let veiculosFrotaContainerPJ = document.getElementById('veiculos-frota-pego-pj');
let referenciaComercialContainerPJ = document.getElementById('referencia-comercial-pego-pj');


let socioMajoritarioState = null;
    document.getElementById('socio-assina-sim').addEventListener('click',()=>{ 
        socioMajoritarioState = true;
        document.getElementById('socio-assina-nao').checked = false;
    });
    document.getElementById('socio-assina-nao').addEventListener('click',()=>{ 
        socioMajoritarioState = false;
        document.getElementById('socio-assina-sim').checked = false;
    });

let veiculoQuitadoStatePJ = null;
    document.getElementById('quitado-veiculo-frota-pj').addEventListener('click', ()=>{
        veiculoQuitadoStatePJ = true;
        document.getElementById('nao-quitado-veiculo-frota-pj').checked = false;
    });
    document.getElementById('nao-quitado-veiculo-frota-pj').addEventListener('click', ()=>{
        veiculoQuitadoStatePJ = false;
        document.getElementById('quitado-veiculo-frota-pj').checked = false;
    })

let cpfSociosPJ = [];
    document.getElementById('add-cpf').addEventListener('click', ()=>{
        cpfSociosPJ.push(document.getElementById('cpfs-empresa').value.replace(/[^\d]+/g,''));

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderCPFPJ(cpfContainerPJ,cpfSociosPJ);


        document.getElementById('cpfs-empresa').value = '';
    })

let faturamentosPJ = [];
    document.getElementById('add-faturamento').addEventListener('click', () => {

        faturamentosPJ.push({
            mes : document.getElementById('mes-faturamento').value,
            ano : document.getElementById('ano-faturamento').value,
            valor : document.getElementById('valor-faturamento').value
        })

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderFaturamentoPJ(faturamentoContainerPJ,faturamentosPJ);

        document.getElementById('mes-faturamento').value = "";
        document.getElementById('ano-faturamento').value = "";
        document.getElementById('valor-faturamento').value = ""

    });

let empresasAtuaisPJ = [];
    document.getElementById('add-empresa-atual-pj').addEventListener('click', ()=>{
        empresasAtuaisPJ.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-atual').value,
            CEP : document.getElementById('cep-empresa-atual-pj').value,
            cidade : document.getElementById('cidade-empresa-atual-pj').value,
            rua : document.getElementById('rua-empresa-atual-pj').value,
            bairro : document.getElementById('bairro-empresa-atual-pj').value,
            numero : document.getElementById('numero-empresa-atual-pj').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-atual-pj').value,
            celular : document.getElementById('celular-empresa-atual-pj').value,
            tempoDeServico : document.getElementById('tempo-empresa-atual-pj').value,
            faturamentoAtual : document.getElementById('faturamento-atual-empresa-atual-pj').value,
            faturamentoFuturo : document.getElementById('faturamento-futuro-empresa-atual-pj').value
        });

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderEmpresasAtuaisPJ(empresaAtualContainerPJ, empresasAtuaisPJ);

        document.getElementById('nome-empresa-atual').value = "";
        document.getElementById('cep-empresa-atual-pj').value = "";
        document.getElementById('cidade-empresa-atual-pj').value = "";
        document.getElementById('rua-empresa-atual-pj').value = "";
        document.getElementById('bairro-empresa-atual-pj').value = "";
        document.getElementById('numero-empresa-atual-pj').value = "";
        document.getElementById('telefone-fixo-empresa-atual-pj').value = "";
        document.getElementById('celular-empresa-atual-pj').value = "";
        document.getElementById('tempo-empresa-atual-pj').value = "";
        document.getElementById('faturamento-atual-empresa-atual-pj').value = "";
        document.getElementById('faturamento-futuro-empresa-atual-pj').value = "";
    })


let empresasAnterioresPJ = [];
    document.getElementById('add-empresa-anterior-pj').addEventListener('click', ()=>{
        empresasAnterioresPJ.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-anterior-pj').value,
            CEP : document.getElementById('cep-empresa-anterior-pj').value,
            cidade : document.getElementById('cidade-empresa-anterior-pj').value,
            rua : document.getElementById('rua-empresa-anterior-pj').value,
            bairro : document.getElementById('bairro-empresa-anterior-pj').value,
            numero : document.getElementById('numero-empresa-anterior-pj').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-anterior-pj').value,
            celular : document.getElementById('celular-empresa-anteriorpj').value,
            tempoDeServico : document.getElementById('tempo-empresa-anterior-pj').value,
            salario : document.getElementById('salario-empresa-anterior-pj').value,
        });

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderEmpresasAnterioresPJ(empresaAnteriorContainerPJ, empresasAnterioresPJ);

        document.getElementById('nome-empresa-anterior-pj').value = "";
        document.getElementById('cep-empresa-anterior-pj').value = "";
        document.getElementById('cidade-empresa-anterior-pj').value = "";
        document.getElementById('rua-empresa-anterior-pj').value = "";
        document.getElementById('bairro-empresa-anterior-pj').value = "";
        document.getElementById('numero-empresa-anterior-pj').value = "";
        document.getElementById('telefone-fixo-empresa-anterior-pj').value = "";
        document.getElementById('celular-empresa-anteriorpj').value = "";
        document.getElementById('tempo-empresa-anterior-pj').value = "";
        document.getElementById('salario-empresa-anterior-pj').value = "";
    })


let empresasFuturasPJ = [];
    document.getElementById('add-empresa-futura-pj').addEventListener('click', ()=>{
        empresasFuturasPJ.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-futura-pj').value,
            CEP : document.getElementById('cep-empresa-futura-pj').value,
            cidade : document.getElementById('cidade-empresa-futura-pj').value,
            rua : document.getElementById('rua-empresa-futura-pj').value,
            bairro : document.getElementById('bairro-empresa-futura-pj').value,
            numero : document.getElementById('numero-empresa-futura-pj').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-futura-pj').value,
            celular : document.getElementById('celular-empresa-futura-pj').value,
            salario : document.getElementById('salario-empresa-futura-pj').value,
        });

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderEmpresasFuturasPJ(empresaFuturaContainerPJ, empresasFuturasPJ);

        document.getElementById('nome-empresa-futura-pj').value = "";
        document.getElementById('cep-empresa-futura-pj').value = "";
        document.getElementById('cidade-empresa-futura-pj').value = "";
        document.getElementById('rua-empresa-futura-pj').value = "";
        document.getElementById('bairro-empresa-futura-pj').value = "";
        document.getElementById('numero-empresa-futura-pj').value = "";
        document.getElementById('telefone-fixo-empresa-futura-pj').value = "";
        document.getElementById('celular-empresa-futura-pj').value = "";
        document.getElementById('salario-empresa-futura-pj').value = "";
    })

let frotaDeVeiculosPJ = [];
    document.getElementById('add-veiculo-frota-pj').addEventListener('click', ()=>{
        frotaDeVeiculosPJ.push({
            marca : document.getElementById('marca-veiculo-frota-pj').value,
            modelo : document.getElementById('modelo-veiculo-frota-pj').value,
            ano : document.getElementById('ano-veiculo-frota-pj').value,
            placa : document.getElementById('placa-veiculo-frota-pj').value,
            tempoEmNome : document.getElementById('tempo-em-nome-veiculo-frota-pj').value,
            quitado : veiculoQuitadoStatePJ
        })

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderFrotaPJ(veiculosFrotaContainerPJ, frotaDeVeiculosPJ);

        document.getElementById('marca-veiculo-frota-pj').value = "";
        document.getElementById('modelo-veiculo-frota-pj').value = "";
        document.getElementById('ano-veiculo-frota-pj').value = "";
        document.getElementById('placa-veiculo-frota-pj').value = "";
        document.getElementById('tempo-em-nome-veiculo-frota-pj').value = "";
        veiculoQuitadoStatePJ = null;
        document.getElementById('quitado-veiculo-frota-pj').checked = false;
        document.getElementById('nao-quitado-veiculo-frota-pj').checked = false;
    })

let referenciaComercialPJ = [];
    document.getElementById('add-referencia-comercial-pj').addEventListener('click',()=>{
        referenciaComercialPJ.push({
            empresa : document.getElementById('nome-empresa-referencia-comercial-pj').value,
            telefone : document.getElementById('telefone-empresa-referencia-comercial-pj').value
        })

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderReferenciaComercialPJ(referenciaComercialContainerPJ,referenciaComercialPJ);

        document.getElementById('nome-empresa-referencia-comercial-pj').value = "";
        document.getElementById('telefone-empresa-referencia-comercial-pj').value = "";
    })
    



finalizaCadastroPJ.addEventListener('click',async ()=>{

    let newPJ = {
        dadosCadastrais : {
            razaoSocial : document.getElementById('razao-social').value,
            CNPJ : document.getElementById('cnpj-empresa').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-empresa').value,
            CPF : cpfSociosPJ,
            dataAbertura : document.getElementById('data-abertura-empresa').value,
            capitalSocial : document.getElementById('capital-social-empresa').value,
            numeroFuncionariosRegistrados : document.getElementById('numero-funcionarios-registrados').value,
            telefoneFixo : document.getElementById('telefone-fixo-pj').value,
            CEP : document.getElementById('cep-empresa').value,
            cidade : document.getElementById('cidade-empresa').value,
            rua : document.getElementById('rua-empresa').value,
            bairro : document.getElementById('bairro-empresa').value,
            numero : document.getElementById('numero-empresa').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-empresa').value,
            agencia : document.getElementById('agencia-empresa').value,
            conta : {
                numero : document.getElementById('numero-conta-empresa').value,
                digito : document.getElementById('digito-conta-empresa').value
            },
            tempoConta : document.getElementById('tempo-conta-empresa').value,
            telefoneAgencia : document.getElementById('telefone-agencia-empresa').value
        },
        socios : {
            porcentagemSocioMajoritario : document.getElementById('porcentagem-socio-majoritario-empresa').value,
            porcentagemDemaisSocios : document.getElementById('porcentagem-demais-socios-empresa').value,
            socioMajoritarioAssinaSozinho : socioMajoritarioState
        },
        contador : {
            nome : document.getElementById('nome-contador-empresa').value,
            escritorio : document.getElementById('escritorio-contador-empresa').value,
            telefoneFixo : document.getElementById('telefone-fixo-contador-empresa').value,
            celular : document.getElementById('celular-contador-empresa').value
        },
        faturamento : faturamentosPJ,
        ondePrestaServicos : {
            empresasAtuais : empresasAtuaisPJ,
            empresasAnteriores : empresasAnterioresPJ,
            empresasFuturas : empresasFuturasPJ
        },
        frotaDeVeiculos : frotaDeVeiculosPJ,
        referenciasComerciais : referenciaComercialPJ,
        veiculoAFinanciar : {
            marca : document.getElementById('marca-veiculo-a-financiar-pj').value,
            modelo : document.getElementById('modelo-veiculo-a-financiar-pj').value,
            ano : document.getElementById('ano-veiculo-a-financiar-pj').value,
            placa : document.getElementById('placa-veiculo-a-financiar-pj').value,
            valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pj').value,
            valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pj').value,
            valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pj').value,
            valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pj').value,
            bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pj').value,
            condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj').value,
            indicacao : document.getElementById('indicacao-veiculo-a-financiar-pj').value,
            dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pj').value,
            respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj').value,
            observacoes : document.getElementById('observacoes-pj').value
        }
    } // fim do objeto

    createPJ(newPJ);

    const cardsData = await getAllPJ(6);

    renderCardsPJ(cardsContainerPJ,cardsData);

    limpaCamposPJ();
    document.getElementById('pj-form').style.display = "none";



})

cancelaCadastroPJ.addEventListener('click', ()=>{
    document.getElementById('pj-form').style.display = "none";
    limpaCamposPJ();
})

function limpaCamposPJ(){
    document.getElementById('razao-social').value = "";
    document.getElementById('cnpj-empresa').value = "";
    document.getElementById('email-empresa').value = "";
    document.getElementById('data-abertura-empresa').value = "";
    document.getElementById('capital-social-empresa').value = "";
    document.getElementById('numero-funcionarios-registrados').value = "";
    document.getElementById('numero-funcionarios-registrados').value = "";
    document.getElementById('telefone-fixo-pj').value = "";
    document.getElementById('cep-empresa').value = "";
    document.getElementById('cidade-empresa').value = "";
    document.getElementById('rua-empresa').value = "";
    document.getElementById('bairro-empresa').value = "";
    document.getElementById('numero-empresa').value = "";
    document.getElementById('banco-empresa').value = "";
    document.getElementById('agencia-empresa').value = "";
    document.getElementById('numero-conta-empresa').value = "";
    document.getElementById('digito-conta-empresa').value = "";
    document.getElementById('tempo-conta-empresa').value = "";
    document.getElementById('telefone-agencia-empresa').value = "";
    document.getElementById('porcentagem-socio-majoritario-empresa').value = "";
    document.getElementById('porcentagem-demais-socios-empresa').value = "";
    document.getElementById('nome-contador-empresa').value = "";
    document.getElementById('escritorio-contador-empresa').value = "";
    document.getElementById('telefone-fixo-contador-empresa').value = "";
    document.getElementById('celular-contador-empresa').value = "";
    document.getElementById('marca-veiculo-a-financiar-pj').value = "";
    document.getElementById('modelo-veiculo-a-financiar-pj').value = "";
    document.getElementById('ano-veiculo-a-financiar-pj').value = "";
    document.getElementById('placa-veiculo-a-financiar-pj').value = "";
    document.getElementById('valor-venda-veiculo-a-financiar-pj').value = "";
    document.getElementById('valor-molicar-veiculo-a-financiar-pj').value = "";
    document.getElementById('valor-entrada-veiculo-a-financiar-pj').value = "";
    document.getElementById('valor-financiado-veiculo-a-financiar-pj').value = "";
    document.getElementById('banco-aprovado-veiculo-a-financiar-pj').value = "";
    document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pj').value = "";
    document.getElementById('indicacao-veiculo-a-financiar-pj').value = "";
    document.getElementById('data-conclusao-veiculo-a-financiar-pj').value = "";
    document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pj').value = "";
    document.getElementById('observacoes-pj').value = "";
    document.getElementById('socio-assina-sim').checked = false;
    document.getElementById('socio-assina-nao').checked = false;
    document.getElementById('quitado-veiculo-frota-pj').checked = false;
    document.getElementById('nao-quitado-veiculo-frota-pj').checked = false;
    socioMajoritarioState = null;
    veiculoQuitadoStatePJ = null;
    cpfSociosPJ = [];
    faturamentosPJ = [];
    empresasAtuaisPJ = [];
    empresasAnterioresPJ = [];
    empresasFuturasPJ = [];
    frotaDeVeiculosPJ = [];
    referenciaComercialPJ = [];
    cpfContainerPJ.innerHTML = "";
    faturamentoContainerPJ.innerHTML = "";
    empresaAtualContainerPJ.innerHTML = "";
    empresaAnteriorContainerPJ.innerHTML = "";
    empresaFuturaContainerPJ.innerHTML = "";
    veiculosFrotaContainerPJ.innerHTML = "";
    referenciaComercialContainerPJ.innerHTML = "";
}

function deleteCPFFromArrayPJ(pos){
    cpfSociosPJ.splice(pos, 1);
    renderCPFPJ(cpfContainerPJ,cpfSociosPJ);
}

function renderCPFPJ (container, data){
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
        del.setAttribute('onclick', `deleteCPFFromArrayPJ(${pos})`);

        li.appendChild(cpf);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteFaturamentoFromArrayPJ(pos){
    faturamentosPJ.splice(pos, 1);
    renderFaturamentoPJ(faturamentoContainerPJ,faturamentosPJ)
}

function renderFaturamentoPJ(container, data){
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

        let ano = document.createElement('p')
            anoValue = document.createTextNode(`Ano: ${element.ano}`);
            ano.appendChild(anoValue);

        let valor = document.createElement('p')
            valorValue = document.createTextNode(`Valor: ${element.valor}`);
            valor.appendChild(valorValue);


        content.appendChild(mes);
        content.appendChild(ano);
        content.appendChild(valor);


        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFaturamentoFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteEmpresaAtualFromArrayPJ(pos){
    empresasAtuaisPJ.splice(pos, 1);
    renderEmpresasAtuaisPJ(empresaAtualContainerPJ, empresasAtuaisPJ);
}

function renderEmpresasAtuaisPJ(container, data){
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
        del.setAttribute('onclick', `deleteEmpresaAtualFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}

function deleteEmpresaAnteriorFromArrayPJ(pos){
    empresasAnterioresPJ.splice(pos, 1);
    renderEmpresasAnterioresPJ(empresaAnteriorContainerPJ, empresasAnterioresPJ)
}

function renderEmpresasAnterioresPJ (container, data){
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
        del.setAttribute('onclick', `deleteEmpresaAnteriorFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteEmpresaFuturaFromArrayPJ(pos){
    empresasFuturasPJ.splice(pos, 1);
    renderEmpresasFuturasPJ(empresaFuturaContainerPJ, empresasFuturasPJ);
}

function renderEmpresasFuturasPJ(container, data){
    container.innerHTML = "";

    data.forEach(element =>{
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
        del.setAttribute('onclick', `deleteEmpresaFuturaFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })

}

function deleteFrotaFromArrayPJ(pos){
    frotaDeVeiculosPJ.splice(pos, 1);
    renderFrotaPJ(veiculosFrotaContainerPJ, frotaDeVeiculosPJ);
}

function renderFrotaPJ(container, data){
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
                modeloValue = document.createTextNode(`Modeolo: ${element.modelo}`);
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
        del.setAttribute('onclick', `deleteFrotaFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}

function deleteReferenciaComercialFromArrayPJ(pos){
    referenciaComercialPJ.splice(pos, 1);
    renderReferenciaComercialPJ(referenciaComercialContainerPJ,referenciaComercialPJ)
}

function renderReferenciaComercialPJ(container, data){
    container.innerHTML = "";

    data.forEach(element =>{
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
        del.setAttribute('onclick', `deleteReferenciaComercialFromArrayPJ(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
    
}





document.getElementById('envia-email-pj').addEventListener('click',async()=>{
    /*
    curl --request POST \
   --url https://automate-heroku-renan.herokuapp.com/mail \
   --header 'content-type: application/json' \
   --data '{
       "destino": "renanc433@gmail.com",
       "assunto":"123",
       "corpo":"<b>funcionou essa bucetona<br />"
   }' 
   */

   await axios.post('https://automate-heroku-renan.herokuapp.com/mail',{
       destino: "allanvinisilva@gmail.com",
       assunto: "123",
       corpo: "<h1>Funcionou</h1>"
   })
   .then((response)=>{
       console.log(response);
   }, (error)=>{
       console.log(error);
   });

   await axios.get('https://api.github.com/users/allanvini').then((response) => {
        console.log(response.data);
        //console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(response.config);
  });


})
