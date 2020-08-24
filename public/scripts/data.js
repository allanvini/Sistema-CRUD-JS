let cardsData;
let clickCounter = 1;

async function getCEP(cep){
    let data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        return response.data;
    })
    return data;
}