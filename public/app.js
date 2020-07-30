
var config =  {
    apiKey: "AIzaSyAvvFdgrqb7ub97VKOueNE3j7XwzIY39z0",
    authDomain: "marli-clients-manager.firebaseapp.com",
    databaseURL: "https://marli-clients-manager.firebaseio.com",
    projectId: "marli-clients-manager",
    storageBucket: "marli-clients-manager.appspot.com",
    messagingSenderId: "1051808743726",
    appId: "1:1051808743726:web:2c62ed8e2149658e39babf"
  };


  firebase.initializeApp(config);
  var firestore = firebase.firestore()

  function createPJ(pjData){
    const docRef = firestore.doc(`PJ/${pjData.dadosCadastrais.CNPJ}`)
    var anos = [];
    var marcas = [];
    var modelos = [];
    var filtros = [];
    if(pjData.frotaDeVeiculos.length>0){
        pjData.frotaDeVeiculos.forEach(veiculo => {
            console.log(veiculo)
            anos.push(veiculo.ano)
            marcas.push(veiculo.marca)
            modelos.push(veiculo.modelo)
            filtros.push(veiculo.ano,veiculo.marca,veiculo.modelo)
        })
    };

    docRef.set({
        CNPJ: pjData.dadosCadastrais.CNPJ,
        CPF: pjData.dadosCadastrais.CPF,
        ANOS: anos,
        MODELOS: modelos,
        MARCAS: marcas,
        FILTROS: filtros,
        pjData
    }).then(function(){
        console.log("saved")
    }).catch(function(error){
        console.log(error)
    })
  }

  function createPF(pfData){
    const docRef = firestore.doc(`PF/${pfData.dadosCadastrais.CPF}`)
    docRef.set({
        CPF: pfData.dadosCadastrais.CPF,

    }).then(function(){
        console.log("saved")
    }).catch(function(error){
        console.log(error)
    })
  }

  function getPJ(cpnj){

      firestore.collection("PJ").where("CNPJ", "==", cpnj)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

  }

  function getPJByCPF(cpf){

    firestore.collection("PJ").where('CPF', 'array-contains-any',
    [cpf])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  }

  function getPJByFrota(ano='', modelo='', marca='', page=10){

    firestore.collection("PJ").limit(page).where('FILTROS', 'array-contains-any', [ano, modelo, marca])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    
  }