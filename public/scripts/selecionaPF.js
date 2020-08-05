let PF = document.getElementById('PF');

PF.addEventListener('click', ()=>{
    this.PF.style.borderBottom = 'solid 2px blue';
    document.getElementById('PJ').style.border = 'none';

    document.getElementById('actions-pj').style.display = "none";
    document.getElementById('actions-pf').style.display = "grid";

})