let cancelaCadastroPF = document.getElementById('cancela-cadastro-pf');
let finalizaCadastroPF = document.getElementById('conclui-cadastro-pf');

let cnpjContainerPF = document.getElementById('cnpj-pego');
let empresasAtuaisContainerPF = document.getElementById('empresas-atuais-pego-pf');
let empresasAnterioresContainerPF = document.getElementById('empresas-anterior-pego-pf');
let empresasFuturasContainerPF = document.getElementById('empresas-futura-pego-pf');
let veiculosFrotaContainerPF = document.getElementById('veiculos-frota-pego-pf');
let referenciaPessoalContainerPF = document.getElementById('referencia-pessoal-pego-pf');

let cnpjCadastrados = [];
    document.getElementById('add-cnpj').addEventListener('click',()=>{
        let newCNPJ = document.getElementById('cnpj-pf')
        cnpjCadastrados.push(newCNPJ.value.replace(/[^\d]+/g,''));
        newCNPJ.value = "";

        renderCnpjPF (cnpjContainerPF, cnpjCadastrados);
    })

    function deleteCnpjFromArray (pos){
        cnpjCadastrados.splice(pos,1);
        renderCnpjPF(cnpjContainerPF,cnpjCadastrados);
    }

    function renderCnpjPF (container, data){
        container.innerHTML = "";

        data.forEach(element=>{
            let li = document.createElement('li');
            let content = document.createTextNode(element);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deleteCnpjFromArray(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })
    }

let veiculoQuitadoFrotaStatePF = null;
    document.getElementById('quitado-veiculo-frota-pf').addEventListener('click',()=>{
        veiculoQuitadoFrotaStatePF = true;
        document.getElementById('nao-quitado-veiculo-frota-pf').checked = false;
    });
    document.getElementById('nao-quitado-veiculo-frota-pf').addEventListener('click',()=>{
        veiculoQuitadoFrotaStatePF = false;
        document.getElementById('quitado-veiculo-frota-pf').checked = false;
    });

let imovelProprioStatePF = null;
    document.getElementById('imovel-proprio-pf-sim').addEventListener('click',()=>{
        imovelProprioStatePF = true;
        document.getElementById('imovel-proprio-pf-nao').checked = false;
    })
    document.getElementById('imovel-proprio-pf-nao').addEventListener('click',()=>{
        imovelProprioStatePF = false;
        document.getElementById('imovel-proprio-pf-sim').checked = false;
    })

cancelaCadastroPF.addEventListener('click', ()=>{
    document.getElementById('pf-form').style.display = "none";
    limpaCamposPF();
})

let empresasAtuaisPF = [];
    document.getElementById('add-empresa-atual-pf').addEventListener('click',()=>{
        empresasAtuaisPF.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-atual-pf').value,
            cep : document.getElementById('cep-empresa-atual-pf').value,
            cidade : document.getElementById('cidade-empresa-atual-pf').value,
            rua : document.getElementById('rua-empresa-atual-pf').value,
            bairro : document.getElementById('bairro-empresa-atual-pf').value,
            numero : document.getElementById('numero-empresa-atual-pf').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-atual-pf').value,
            celular : document.getElementById('celular-empresa-atual-pf').value,
            tempoDeServico : document.getElementById('tempo-empresa-atual-pf').value,
            faturamentoAtual : document.getElementById('faturamento-atual-empresa-atual-pf').value,
            faturamentoFuturo : document.getElementById('faturamento-futuro-empresa-atual-pf').value
        })

        //FUNÇÃO QUE RENDERIZA OS CADASTROS JA FEITOS
        renderizaEmpresasAtuaisPF(empresasAtuaisContainerPF, empresasAtuaisPF);

        document.getElementById('nome-empresa-atual-pf').value = "";
        document.getElementById('cep-empresa-atual-pf').value = "";
        document.getElementById('cidade-empresa-atual-pf').value = "";
        document.getElementById('rua-empresa-atual-pf').value = "";
        document.getElementById('bairro-empresa-atual-pf').value = "";
        document.getElementById('numero-empresa-atual-pf').value = "";
        document.getElementById('telefone-fixo-empresa-atual-pf').value = "";
        document.getElementById('celular-empresa-atual-pf').value = "";
        document.getElementById('tempo-empresa-atual-pf').value = "";
        document.getElementById('faturamento-atual-empresa-atual-pf').value = "";
        document.getElementById('faturamento-futuro-empresa-atual-pf').value = "";
    })

    function deleteEmpresaAtualFromArrayPF(pos){
        empresasAtuaisPF.splice(pos,1);
        renderizaEmpresasAtuaisPF(empresasAtuaisContainerPF,empresasAtuaisPF);
    }

    function renderizaEmpresasAtuaisPF(container,data){
        container.innerHTML = "";

        data.forEach(element=>{
            let li = document.createElement('li');
            let content = document.createTextNode(`Nome : ${element.nomeDaEmpresa} / Tempo : ${element.tempoDeServico} / Faturamento : ${element.faturamentoAtual}`);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deleteEmpresaAtualFromArrayPF(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })

    }

let empresasAnterioresPF = [];
    document.getElementById('add-empresa-anterior-pf').addEventListener('click',()=>{
        empresasAnterioresPF.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-anterior-pf').value,
            cep : document.getElementById('cep-empresa-anterior-pf').value,
            cidade : document.getElementById('cidade-empresa-anterior-pf').value,
            rua : document.getElementById('rua-empresa-anterior-pf').value,
            bairro : document.getElementById('bairro-empresa-anterior-pf').value,
            numero : document.getElementById('numero-empresa-anterior-pf').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-anterior-pf').value,
            celular : document.getElementById('celular-empresa-anterior-pf').value,
            tempoDeServico : document.getElementById('tempo-empresa-anterior-pf').value,
            salario : document.getElementById('salario-empresa-anterior-pf').value
        })

        // FUNÇÃO QUE RENDERIZA AS EMPRESAS ANTERIORES CADASTRADAS
        renderEmpresasAnterioresPF(empresasAnterioresContainerPF,empresasAnterioresPF);

        document.getElementById('nome-empresa-anterior-pf').value = "";
        document.getElementById('cep-empresa-anterior-pf').value = "";
        document.getElementById('cidade-empresa-anterior-pf').value = "";
        document.getElementById('rua-empresa-anterior-pf').value = "";
        document.getElementById('bairro-empresa-anterior-pf').value = "";
        document.getElementById('numero-empresa-anterior-pf').value = "";
        document.getElementById('telefone-fixo-empresa-anterior-pf').value = "";
        document.getElementById('celular-empresa-anterior-pf').value = "";
        document.getElementById('tempo-empresa-anterior-pf').value = "";
        document.getElementById('salario-empresa-anterior-pf').value = "";
    })

    function deleteEmpresaAnteriorFromArrayPF(pos){
        empresasAnterioresPF.splice(pos, 1);
        renderEmpresasAnterioresPF(empresasAnterioresContainerPF,empresasAnterioresPF);
    }

    function renderEmpresasAnterioresPF (container,data){
        container.innerHTML = "";

        data.forEach(element=>{
            let li = document.createElement('li');
            let content = document.createTextNode(`Nome : ${element.nomeDaEmpresa} / Tempo : ${element.tempoDeServico} / Faturamento : ${element.salario}`);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deleteEmpresaAnteriorFromArrayPF(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })
    }

let empresasFuturasPF = [];
    document.getElementById('add-empresa-futura-pf').addEventListener('click',()=>{
        empresasFuturasPF.push({
            nomeDaEmpresa : document.getElementById('nome-empresa-futura-pf').value,
            cep : document.getElementById('cep-empresa-futura-pf').value,
            cidade : document.getElementById('cidade-empresa-futura-pf').value,
            rua : document.getElementById('rua-empresa-futura-pf').value,
            bairro : document.getElementById('bairro-empresa-futura-pf').value,
            numero : document.getElementById('numero-empresa-futura-pf').value,
            telefoneFixo : document.getElementById('telefone-fixo-empresa-futura-pf').value,
            celular : document.getElementById('celular-empresa-futura-pf').value,
            salario : document.getElementById('salario-empresa-futura-pf').value
        })

        // FUNÇÃO QUE RENDERIZA AS EMPRESAS FUTURAS CADASTRADAS
        renderEmpresasFuturasPF (empresasFuturasContainerPF,empresasFuturasPF)

        document.getElementById('nome-empresa-futura-pf').value = "";
        document.getElementById('cep-empresa-futura-pf').value = "";
        document.getElementById('cidade-empresa-futura-pf').value = "";
        document.getElementById('rua-empresa-futura-pf').value = "";
        document.getElementById('bairro-empresa-futura-pf').value = "";
        document.getElementById('numero-empresa-futura-pf').value = "";
        document.getElementById('telefone-fixo-empresa-futura-pf').value = "";
        document.getElementById('celular-empresa-futura-pf').value = "";
        document.getElementById('salario-empresa-futura-pf').value = "";

    })

    function deleteEmpresaFuturaFromArrayPF(pos){
        empresasFuturasPF.splice(pos,1);
        renderEmpresasFuturasPF (empresasFuturasContainerPF,empresasFuturasPF);
    }

    function renderEmpresasFuturasPF(container,data){
        container.innerHTML = "";

        data.forEach(element=>{
            let li = document.createElement('li');
            let content = document.createTextNode(`Nome : ${element.nomeDaEmpresa} / Salario : ${element.salario}`);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deleteEmpresaFuturaFromArrayPF(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })
    }


let frotaDeVeiculosPF = [];
    document.getElementById('add-veiculo-frota-pf').addEventListener('click',()=>{
        frotaDeVeiculosPF.push({
            marca : document.getElementById('marca-veiculo-frota-pf').value,
            modelo : document.getElementById('modelo-veiculo-frota-pf').value,
            ano : document.getElementById('ano-veiculo-frota-pf').value,
            placa : document.getElementById('placa-veiculo-frota-pf').value,
            tempoEmNome : document.getElementById('tempo-em-nome-veiculo-frota-pf').value,
            quitado : veiculoQuitadoFrotaStatePF
        })

        //FUNÇÃO QUE RENDERIZA A FROTA CADASTRADA
        renderFrotaDeVeiculosPF(veiculosFrotaContainerPF, frotaDeVeiculosPF);

        document.getElementById('marca-veiculo-frota-pf').value = "";
        document.getElementById('modelo-veiculo-frota-pf').value = "";
        document.getElementById('ano-veiculo-frota-pf').value = "";
        document.getElementById('placa-veiculo-frota-pf').value = "";
        document.getElementById('tempo-em-nome-veiculo-frota-pf').value = "";
        document.getElementById('nao-quitado-veiculo-frota-pf').checked = false;
        document.getElementById('quitado-veiculo-frota-pf').checked = false;
        veiculoQuitadoFrotaState = null;

    })

    function deleteVeiculoFrotaFromArray(pos){
        frotaDeVeiculosPF.splice(pos,1);
        renderFrotaDeVeiculosPF(veiculosFrotaContainerPF, frotaDeVeiculosPF);
    }

    function renderFrotaDeVeiculosPF(container,data){
        container.innerHTML = "";

        data.forEach(element=>{
            let quitado;
            if (element.quitado){
                quitado = "Sim"
            } else {
                quitado = "Não"
            }

            let li = document.createElement('li');
            let content = document.createTextNode(`Marca: ${element.marca} / Modelo: ${element.modelo} / Ano: ${element.ano} / Quitado?: ${quitado} `);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deleteVeiculoFrotaFromArray(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })
    }

let referenciaPessoalPF = [];
    document.getElementById('add-referencia-pessoal-pf').addEventListener('click',()=>{
        referenciaPessoalPF.push({
            nome : document.getElementById('nome-referencia-pessoal-pf').value,
            telefoneFixo : document.getElementById('telefone-fixo-referencia-pessoal-pf').value,
            celular : document.getElementById('celular-referencia-pessoal-pf').value
        })

        //FUNÇÃO QUE RENDERIZA OS CADASTROS
        renderReferenciaPessoal(referenciaPessoalContainerPF,referenciaPessoalPF)

        document.getElementById('nome-referencia-pessoal-pf').value = "";
        document.getElementById('telefone-fixo-referencia-pessoal-pf').value = "";
        document.getElementById('celular-referencia-pessoal-pf').value = "";
    })

    function deletaReferenciaPessoalFromArray(pos){
        referenciaPessoalPF.splice(pos,1);
        renderReferenciaPessoal(referenciaPessoalContainerPF,referenciaPessoalPF);
    }

    function renderReferenciaPessoal(container,data){
        container.innerHTML = "";

        data.forEach(element=>{
            let li = document.createElement('li');
            let content = document.createTextNode(`Nome: ${element.nome} / Fixo: ${element.telefoneFixo} / Cel: ${element.celular}`);

            let pos = data.indexOf(element);

            let icon = document.createTextNode("X");

            let del = document.createElement('a');
            del.setAttribute('class', 'btn-small');
            del.style.marginLeft = "10px";
            del.appendChild(icon);
            del.setAttribute('onclick', `deletaReferenciaPessoalFromArray(${pos})`);

            li.appendChild(content);
            li.appendChild(del);

            container.appendChild(li);
        })
    }
    

finalizaCadastroPF.addEventListener('click', ()=>{
    let newPF = {
        dadosCadastrais : {
            nomeCompleto : document.getElementById('nome-completo-pf').value,
            CPF : document.getElementById('CPF-pf').value.replace(/[^\d]+/g,''),
            email : document.getElementById('email-pf').value,
            CNPJ : cnpjCadastrados,
            RG : document.getElementById('RG-pf').value,
            dataDeNascimento : document.getElementById('data-nascimento-pf').value,
            estadoCivil : document.getElementById('estado-civil-pf').value,
            naturalidade : document.getElementById('naturalidade-pf').value,
            nomeDoPai : document.getElementById('nome-pai-pf').value,
            nomeDaMae : document.getElementById('nome-mae-pf').value
        },
        dadosBancarios : {
            banco : document.getElementById('banco-pf').value,
            agencia : document.getElementById('agencia-pf').value,
            contaCorrente : {
                numero : document.getElementById('numero-conta-pf').value,
                digito : document.getElementById('digito-conta-pf').value,
            },
            tempoDeConta : document.getElementById('tempo-conta-pf').value,
            telefoneDaAgencia : document.getElementById('telefone-agencia-pf').value
        },
        endereco : {
            enderecoAtual : {
                cep : document.getElementById('CEP-endereco-atual-pf').value,
                cidade : document.getElementById('cidade-endereco-atual-pf').value,
                rua : document.getElementById('rua-endereco-atual-pf').value,
                bairro : document.getElementById('bairro-endereco-atual-pf').value,
                numero : document.getElementById('numero-endereco-atual-pf').value,
                telefoneFixo : document.getElementById('telefone-fixo-pf').value,
                celular : document.getElementById('celular-pf').value,
                tempoResidencial : document.getElementById('tempo-residencia-atual-pf').value,
                imovelProprio : imovelProprioStatePF,
                valorDoImovel : document.getElementById('valor-imovel-residencia-atual-pf').value
            },
            enderecoAnterior : {
                cep : document.getElementById('CEP-endereco-anterior-pf').value,
                cidade : document.getElementById('cidade-endereco-anterior-pf').value,
                rua : document.getElementById('rua-endereco-anterior-pf').value,
                bairro : document.getElementById('bairro-endereco-anterior-pf').value,
                numero : document.getElementById('numero-endereco-anterior-pf').value,
                tempoDeResidencia : document.getElementById('tempo-residencia-anterior-pf').value
            },
            ondePrestaServicos : {
                empresasAtuais : empresasAtuaisPF,
                empresasAnteriores : empresasAnterioresPF,
                empresasFuturas : empresasFuturasPF
            },
            frotaDeVeiculos : frotaDeVeiculosPF,
            veiculoAFinanciar : {
                marca : document.getElementById('marca-veiculo-a-financiar-pf').value,
                modelo : document.getElementById('modelo-veiculo-a-financiar-pf').value,
                ano : document.getElementById('ano-veiculo-a-financiar-pf').value,
                placa : document.getElementById('placa-veiculo-a-financiar-pf').value,
                valorDeVenda : document.getElementById('valor-venda-veiculo-a-financiar-pf').value,
                valorDaMolicar : document.getElementById('valor-molicar-veiculo-a-financiar-pf').value,
                valorDeEntrada : document.getElementById('valor-entrada-veiculo-a-financiar-pf').value,
                valorFinanciado : document.getElementById('valor-financiado-veiculo-a-financiar-pf').value,
                bancoAprovado : document.getElementById('banco-aprovado-veiculo-a-financiar-pf').value,
                condicoesAprovadas : document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf').value,
                indicacao : document.getElementById('indicacao-veiculo-a-financiar-pf').value,
                dataDeConclusao : document.getElementById('data-conclusao-veiculo-a-financiar-pf').value,
                respostaNegativaCredito : document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf').value,
                observacoes : document.getElementById('observacoes-pf').value
            }
        }
    }

    createPF(newPF);

    limpaCamposPF();
    document.getElementById('pf-form').style.display = "none";
})

function limpaCamposPF(){
    document.getElementById('nome-completo-pf').value = "";
    document.getElementById('CPF-pf').value = "";
    document.getElementById('email-pf').value = "";
    cnpjCadastrados = [];
    document.getElementById('RG-pf').value = "";
    document.getElementById('data-nascimento-pf').value = "";
    document.getElementById('estado-civil-pf').value = "";
    document.getElementById('naturalidade-pf').value = "";
    document.getElementById('nome-pai-pf').value = "";
    document.getElementById('nome-mae-pf').value = "";
    document.getElementById('banco-pf').value = "";
    document.getElementById('agencia-pf').value = "";
    document.getElementById('numero-conta-pf').value = "";
    document.getElementById('digito-conta-pf').value = "";
    document.getElementById('tempo-conta-pf').value = "";
    document.getElementById('telefone-agencia-pf').value = "";
    document.getElementById('imovel-proprio-pf-sim').checked = false;
    document.getElementById('imovel-proprio-pf-nao').checked = false;
    imovelProprioStatePF = null;
    document.getElementById('cidade-endereco-atual-pf').value = "";
    document.getElementById('rua-endereco-atual-pf').value = "";
    document.getElementById('bairro-endereco-atual-pf').value = "";
    document.getElementById('numero-endereco-atual-pf').value = "";
    document.getElementById('telefone-fixo-pf').value = "";
    document.getElementById('celular-pf').value = "";
    document.getElementById('tempo-residencia-atual-pf').value = "";
    document.getElementById('valor-imovel-residencia-atual-pf').value = "";
    document.getElementById('CEP-endereco-anterior-pf').value = "";
    document.getElementById('rua-endereco-anterior-pf').value = "";
    document.getElementById('bairro-endereco-anterior-pf').value = "";
    document.getElementById('numero-endereco-anterior-pf').value = "";
    document.getElementById('tempo-residencia-anterior-pf').value = "";
    document.getElementById('nao-quitado-veiculo-frota-pf').checked = false;
    document.getElementById('quitado-veiculo-frota-pf').checked = false;
    veiculoQuitadoFrotaState = null;
    document.getElementById('marca-veiculo-a-financiar-pf').value = "";
    document.getElementById('modelo-veiculo-a-financiar-pf').value = "";
    document.getElementById('ano-veiculo-a-financiar-pf').value = "";
    document.getElementById('placa-veiculo-a-financiar-pf').value = "";
    document.getElementById('valor-venda-veiculo-a-financiar-pf').value = "";
    document.getElementById('valor-molicar-veiculo-a-financiar-pf').value = "";
    document.getElementById('valor-entrada-veiculo-a-financiar-pf').value = "";
    document.getElementById('valor-financiado-veiculo-a-financiar-pf').value = "";
    document.getElementById('banco-aprovado-veiculo-a-financiar-pf').value = "";
    document.getElementById('condicoes-aprovadas-veiculo-a-financiar-pf').value = "";
    document.getElementById('indicacao-veiculo-a-financiar-pf').value = "";
    document.getElementById('data-conclusao-veiculo-a-financiar-pf').value = "";
    document.getElementById('resposta-negativa-credito-veiculo-a-financiar-pf').value = "";
    document.getElementById('observacoes-pf').value = "";
}