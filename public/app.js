
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

  //PJ Functions
  function createPJ(pjData){
    console.log(pjData);
    const docRef = firestore.doc(`PJ/${pjData.dadosCadastrais.CNPJ}`)
    var anos = [];
    var marcas = [];
    var modelos = [];
    var cnpj = pjData.dadosCadastrais.CNPJ;
    var filtros = [];

    if(pjData.dadosCadastrais.CPF.length>0){
        pjData.dadosCadastrais.CPF.forEach(cpf => {
        filtros.push(cpf)
        })
    }

    if(pjData.frotaDeVeiculos.length>0){
        pjData.frotaDeVeiculos.forEach(veiculo => {
            console.log(veiculo)
            anos.push(veiculo.ano)
            marcas.push(veiculo.marca)
            modelos.push(veiculo.modelo)
            filtros.push(veiculo.ano,veiculo.marca,veiculo.modelo)
        })
    };
    filtros.push(cnpj)

    docRef.set({
        CNPJ: pjData.dadosCadastrais.CNPJ,
        CPF: pjData.dadosCadastrais.CPF,
        ANOS: anos,
        MODELOS: modelos,
        MARCAS: marcas,
        FILTROS: filtros,
        pjData
    }).then(function(){
        return true
    }).catch(function(error){
        return error
    })
  }

  function getPJ(cpnj){
      firestore.collection("PJ").where("CNPJ", "==", cpnj)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              return doc.data()
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
          return false
      });

  }

  function deletePJ(document){
    firestore.collection("PJ").doc(document).delete().then(function() {
        console.log("Document successfully deleted!");
        return true
    }).catch(function(error) {
        return false
    });
  }

  function getPJByCPF(cpf){
    firestore.collection("PJ").where('CPF', 'array-contains-any',
    [cpf])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });

  }

  function getPJFiltered(cnpj='', cpf='', ano='', modelo='', marca='', page=25){
    firestore.collection("PJ").limit(page).where('FILTROS', 'array-contains-any', [cnpj, cpf, ano, modelo, marca])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
  }

  function getAllPJ(page=25){
    firestore.collection("PJ").limit(page)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
  }

  
  //PF Functions

  function createPF(pfData){
    const docRef = firestore.doc(`PF/${pfData.dadosCadastrais.CPF}`)

    let filtros = [...pfData.dadosCadastrais.CNPJ, pfData.dadosCadastrais.CPF];
    console.log(filtros)
    docRef.set({
        CPF: pfData.dadosCadastrais.CPF,
        FILTROS: filtros,
        pfData
    }).then(function(){
        console.log("saved")
    }).catch(function(error){
        console.log(error)
    })
  }
  
  function getPFByFilter(CPF=0, CNPJ=0){
    firestore.collection("PF").where('FILTROS', 'array-contains-any',
    [CPF, CNPJ])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });

  }

  function getAllPF(page=25){
    firestore.collection("PF").limit(page)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
  }

  function deletePF(document){
    firestore.collection("PF").doc(document).delete().then(function() {
        console.log("Document successfully deleted!");
        return true
    }).catch(function(error) {
        return false
    });
  }

  function auth(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        return false  
      });
      return true
  }