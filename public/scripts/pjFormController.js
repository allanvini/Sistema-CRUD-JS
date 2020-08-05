let cancelaCadastroPJ = document.getElementById('cancela-cadastro-pj');
let finalizaCadastroPJ = document.getElementById('conclui-cadastro-pj');

let cpfContainer = document.getElementById('cpf-pego');
let faturamentoContainer = document.getElementById('faturamento-pego');
let empresaAtualContainer = document.getElementById('empresas-atuais-pego-pj');
let empresaAnteriorContainer = document.getElementById('empresas-anterior-pego-pj');
let empresaFuturaContainer = document.getElementById('empresas-futura-pego-pj');
let veiculosFrotaContainer = document.getElementById('veiculos-frota-pego-pj');
let referenciaComercialContainer = document.getElementById('referencia-comercial-pego-pj');


let socioMajoritarioState = null;
    document.getElementById('socio-assina-sim').addEventListener('click',()=>{ 
        socioMajoritarioState = true;
        document.getElementById('socio-assina-nao').checked = false;
    });
    document.getElementById('socio-assina-nao').addEventListener('click',()=>{ 
        socioMajoritarioState = false;
        document.getElementById('socio-assina-sim').checked = false;
    });

let veiculoQuitadoState = null;
    document.getElementById('quitado-veiculo-frota-pj').addEventListener('click', ()=>{
        veiculoQuitadoState = true;
        document.getElementById('nao-quitado-veiculo-frota-pj').checked = false;
    });
    document.getElementById('nao-quitado-veiculo-frota-pj').addEventListener('click', ()=>{
        veiculoQuitadoState = false;
        document.getElementById('quitado-veiculo-frota-pj').checked = false;
    })

let cpfSociosPJ = [];
    document.getElementById('add-cpf').addEventListener('click', ()=>{
        cpfSociosPJ.push(document.getElementById('cpfs-empresa').value);

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderCPF(cpfContainer,cpfSociosPJ);


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
        renderFaturamento(faturamentoContainer,faturamentosPJ);

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
        renderEmpresasAtuais(empresaAtualContainer, empresasAtuaisPJ);

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
        renderEmpresasAnteriores(empresaAnteriorContainer, empresasAnterioresPJ);

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
        renderEmpresasFuturas(empresaFuturaContainer, empresasFuturasPJ);

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
            quitado : veiculoQuitadoState
        })

        // FUNÇÃO QUE LIMPA O CONTAINER E RENDERIZA OS DADOS ATUAIS
        renderFrota(veiculosFrotaContainer, frotaDeVeiculosPJ);

        document.getElementById('marca-veiculo-frota-pj').value = "";
        document.getElementById('modelo-veiculo-frota-pj').value = "";
        document.getElementById('ano-veiculo-frota-pj').value = "";
        document.getElementById('placa-veiculo-frota-pj').value = "";
        document.getElementById('tempo-em-nome-veiculo-frota-pj').value = "";
        veiculoQuitadoState = null;
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
        renderReferenciaComercial(referenciaComercialContainer,referenciaComercialPJ);

        document.getElementById('nome-empresa-referencia-comercial-pj').value = "";
        document.getElementById('telefone-empresa-referencia-comercial-pj').value = "";
    })
    



finalizaCadastroPJ.addEventListener('click',()=>{

    let newPJ = {
        dadosCadastrais : {
            razaoSocial : document.getElementById('razao-social').value,
            CNPJ : document.getElementById('cnpj-empresa').value,
            email : document.getElementById('email-empresa').value,
            cpfSocios : cpfSociosPJ,
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

    limpaCampos();
    console.log(newPJ);
    document.getElementById('pj-form').style.display = "none";

})

cancelaCadastroPJ.addEventListener('click', ()=>{
    document.getElementById('pj-form').style.display = "none";
    limpaCampos();
})

function limpaCampos(){
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
    veiculoQuitadoState = null;
    cpfSociosPJ = [];
    faturamentosPJ = [];
    empresasAtuaisPJ = [];
    empresasAnterioresPJ = [];
    empresasFuturasPJ = [];
    frotaDeVeiculosPJ = [];
    referenciaComercialPJ = [];
    cpfContainer.innerHTML = "";
    faturamentoContainer.innerHTML = "";
    empresaAtualContainer.innerHTML = "";
    empresaAnteriorContainer.innerHTML = "";
    empresaFuturaContainer.innerHTML = "";
    veiculosFrotaContainer.innerHTML = "";
    referenciaComercialContainer.innerHTML = "";
}

function deleteCPFFromArray(pos){
    cpfSociosPJ.splice(pos, 1);
    renderCPF(cpfContainer,cpfSociosPJ);
}

function renderCPF (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
        let content = document.createTextNode(element);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteCPFFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteFaturamentoFromArray(pos){
    faturamentosPJ.splice(pos, 1);
    renderFaturamento(faturamentoContainer,faturamentosPJ)
}

function renderFaturamento(container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
        let content = document.createTextNode(`Mes: ${element.mes} / ano: ${element.ano} / valor: ${element.valor}`);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFaturamentoFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteEmpresaAtualFromArray(pos){
    empresasAtuaisPJ.splice(pos, 1);
    renderEmpresasAtuais(empresaAtualContainer, empresasAtuaisPJ);
}

function renderEmpresasAtuais(container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
        let content = document.createTextNode(`Nome : ${element.nomeDaEmpresa} / Tempo : ${element.tempoDeServico} / Faturamento : ${element.faturamentoAtual}`);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAtualFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}

function deleteEmpresaAnteriorFromArray(pos){
    empresasAnterioresPJ.splice(pos, 1);
    renderEmpresasAnteriores(empresaAnteriorContainer, empresasAnterioresPJ)
}

function renderEmpresasAnteriores (container, data){
    container.innerHTML = "";

    data.forEach(element => {
        let li = document.createElement('li');
        let content = document.createTextNode(`Nome: ${element.nomeDaEmpresa} / Tempo: ${element.tempoDeServico} / Salário: ${element.salario}`);
        
        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaAnteriorFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })
}

function deleteEmpresaFuturaFromArray(pos){
    empresasFuturasPJ.splice(pos, 1);
    renderEmpresasFuturas(empresaFuturaContainer, empresasFuturasPJ);
}

function renderEmpresasFuturas(container, data){
    container.innerHTML = "";

    data.forEach(element =>{
        let li = document.createElement('li');
        let content = document.createTextNode(`Nome: ${element.nomeDaEmpresa} / Salário: ${element.salario}`);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteEmpresaFuturaFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })

}

function deleteFrotaFromArray(pos){
    frotaDeVeiculosPJ.splice(pos, 1);
    renderFrota(veiculosFrotaContainer, frotaDeVeiculosPJ);
}

function renderFrota(container, data){
    container.innerHTML = "";

    data.forEach(element => {

        let quitado;

        if (element.quitado){
            quitado = "Sim"
        } else {
            quitado = "Não"
        }

        let li = document.createElement('li');
        let content = document.createTextNode(`Marca: ${element.marca} / Modelo: ${element.modelo} / Ano: ${element.ano} / Quitado? : ${quitado}`);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteFrotaFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);

    })
}

function deleteReferenciaComercialFromArray(pos){
    referenciaComercialPJ.splice(pos, 1);
    renderReferenciaComercial(referenciaComercialContainer,referenciaComercialPJ)
}

function renderReferenciaComercial(container, data){
    container.innerHTML = "";

    data.forEach(element =>{
        let li = document.createElement('li');
        let content = document.createTextNode(`Empresa: ${element.empresa} / Telefone: ${element.telefone}`);

        let pos = data.indexOf(element);

        let icon = document.createTextNode("X");

        let del = document.createElement('a');
        del.setAttribute('class', 'btn-small');
        del.style.marginLeft = "10px";
        del.appendChild(icon);
        del.setAttribute('onclick', `deleteReferenciaComercialFromArray(${pos})`);

        li.appendChild(content);
        li.appendChild(del);

        container.appendChild(li);
    })




}