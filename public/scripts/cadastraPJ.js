let PJ = document.getElementById('PJ');

PJ.addEventListener('click', ()=>{
    this.PJ.style.borderBottom = 'solid 2px blue';
    document.getElementById('PF').style.border = 'none';
})

document.getElementById('cancela-cadastro-pj').addEventListener('click', ()=>{
    document.getElementById('pj-form').style.display = "none";
});