
//require('dotenv').config();

var config =  {
    apiKey: process.env.apiKey,
    authDomain: process.env,authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
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

  async function getPJFiltered(cnpj='', cpf='', ano='', modelo='', marca='', page=25){
    let retorno = [];
    await firestore.collection("PJ").limit(page).where('FILTROS', 'array-contains-any', [cnpj, cpf, ano, modelo, marca])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //console.log(doc.id, " => ", doc.data());
            retorno.push(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
    return retorno;
  }

  async function getAllPJ(page=25){
    let retorno = [];
    await firestore.collection("PJ").limit(page)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //console.log(doc.id, " => ", doc.data());
            retorno.push(doc.data())
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
    return retorno;
  }

  
  //PF Functions

  function createPF(pfData){
    const docRef = firestore.doc(`PF/${pfData.dadosCadastrais.CPF}`)

    var anos = [];
    var marcas = [];
    var modelos = [];
    var cnpj = pfData.dadosCadastrais.CNPJ;
    var filtros = [];

    if(pfData.dadosCadastrais.CNPJ.length>0){
        pfData.dadosCadastrais.CNPJ.forEach(cnpj => {
            filtros.push(cnpj)
        })
    }

    if(pfData.frotaDeVeiculos.length>0){
        pfData.frotaDeVeiculos.forEach(veiculo => {
            console.log(veiculo)
            anos.push(veiculo.ano)
            marcas.push(veiculo.marca)
            modelos.push(veiculo.modelo)
            filtros.push(veiculo.ano,veiculo.marca,veiculo.modelo)
        })
    };

    console.log("=====",filtros)
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
  
  async function getPFByFilter(cnpj='', cpf='', ano='', modelo='', marca='', page=25){
    console.log(ano);
    let retorno = [];
    await firestore.collection("PF").limit(page).where('FILTROS', 'array-contains-any', [cnpj, cpf, ano, modelo, marca])
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            retorno.push(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
    return retorno;
  }

  async function getAllPF(page=25){
    let retorno = []
    await firestore.collection("PF").limit(page)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //console.log(doc.id, " => ", doc.data());
            retorno.push(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return false
    });
    return retorno;
  }

  function deletePF(document){
    firestore.collection("PF").doc(document).delete().then(function() {
        console.log("Document successfully deleted!");
        return true
    }).catch(function(error) {
        return false
    });
  }

  async function auth(email, password){
    let authorized = false
     await firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
         authorized = true
     }).catch(function(error) {
        authorized = false  
      });
      return authorized;
  }