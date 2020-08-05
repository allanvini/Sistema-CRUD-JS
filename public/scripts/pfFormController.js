let cancelaCadastroPF = document.getElementById('cancela-cadastro-pf');
let finalizaCadastroPF = document.getElementById('conclui-cadastro-pf');

let cnpjContainerPF = document.getElementById('cnpj-pego');

let cnpjCadastrados = [];
    document.getElementById('add-cnpj').addEventListener('click',()=>{
        let newCNPJ = document.getElementById('cnpj-pf')
        cnpjCadastrados.push(newCNPJ.value);
        newCNPJ.value = "";

        renderCnpjPF (cnpjContainerPF, cnpjCadastrados);
    })
    function deleteCnpjFromArray (pos){
        cnpjCadastrados.splice(pos,1);
        renderCnpjPF(cnpjContainerPF);
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

finalizaCadastroPF.addEventListener('click', ()=>{
    let newPF = {
        dadosCadastrais : {
            nomeCompleto : document.getElementById('nome-completo-pf').value,
            CPF : document.getElementById('CPF-pf').value,
            email : document.getElementById('email-pf').value,
            cnpjEmpresas : cnpjCadastrados,
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
                cidade,
                rua,
                bairro,
                numero,
                telefoneFixo,
                celular,
                tempoResidencial,
                imovelProprio : imovelProprioStatePF,
                valorDoImovel
            }
        }
    }

    limpaCamposPF();
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
}