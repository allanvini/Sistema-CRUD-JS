let cadastraNovoPf = document.getElementById('cadastrar-novo-pf');
let cadastraNovoPj = document.getElementById('cadastrar-novo-pj');

cadastraNovoPf.addEventListener('click', ()=>{
    document.getElementById('pf-form').style.display = "block";
})

cadastraNovoPj.addEventListener('click', ()=>{
    document.getElementById('pj-form').style.display = "block";
})