function visualizePJ (pos){

    
    let PJAtual = cardsData[pos];

    let cpfContainer = document.getElementById('cpf-pego-view');
    let cpfs = PJAtual.pjData.dadosCadastrais.CPF;

    document.getElementById('modal-visualizacao-PJ').style.display = "block";
    document.getElementById('pj-view').style.display = "block";


    document.getElementById('razao-social-pj-view').value = PJAtual.pjData.dadosCadastrais.razaoSocial;
    document.getElementById('cnpj-empresa-view').value = PJAtual.pjData.dadosCadastrais.CNPJ;
    document.getElementById('email-empresa-view').value = PJAtual.pjData.dadosCadastrais.email;

    renderCPF(cpfContainer,cpfs);
    document.getElementById('add-cpf-view').addEventListener('click', ()=>{
        cpfs.push(document.getElementById('cpfs-empresa-view').value);

        renderCPF(cpfContainer,cpfs);

        document.getElementById('cpfs-empresa-view').value = "";
    })





    function deleteCPF(pos){
        cpfs.splice(pos, 1);
        renderCPF(cpfContainer,cpfs);
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
            //del.setAttribute('onclick', `deleteCPF(${pos})`);
            del.addEventListener('click',deleteCPF(pos));
    
            li.appendChild(content);
            li.appendChild(del);
    
            container.appendChild(li);
        })
    }
    

}
