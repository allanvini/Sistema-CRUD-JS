let cadastrarNovo = document.getElementById('cadastrar-novo');

cadastrarNovo.addEventListener('click', ()=>{
    if (document.getElementById('PJ').style.borderBottom === 'solid 2px blue'){
        document.getElementById('pj-form').style.display = 'block';
    }
    if (document.getElementById('PF').style.borderBottom === 'solid 2px blue') {
        document.getElementById('pf-form').style.display = 'block';
    }
});