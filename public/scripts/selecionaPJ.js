let PJ = document.getElementById('PJ');

PJ.addEventListener('click', ()=>{
    this.PJ.style.borderBottom = 'solid 2px blue';
    document.getElementById('PF').style.border = 'none';

    document.getElementById('actions-pf').style.display = "none";
    document.getElementById('actions-pj').style.display = "grid";
})