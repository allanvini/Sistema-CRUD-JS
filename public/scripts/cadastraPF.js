let PF = document.getElementById('PF');

PF.addEventListener('click', ()=>{
    this.PF.style.borderBottom = 'solid 2px blue';
    document.getElementById('PJ').style.border = 'none';

    document.getElementById('cancela-cadastro-pf').addEventListener('click', ()=>{
        document.getElementById('pf-form').style.display = "none";
    });

})