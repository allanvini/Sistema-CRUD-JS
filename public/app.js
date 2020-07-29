
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
    const docRef = firestore.doc(`PJ/${pjData.CNPJ}`)
    docRef.set({
        pjData
    }).then(function(){
        console.log("saved")
    }).catch(function(error){
        console.log(error)
    })
  }

  function createPF(pfData){
    const docRef = firestore.doc(`PF/${pfData.CPF}`)
    docRef.set({
        pfData
    }).then(function(){
        console.log("saved")
    }).catch(function(error){
        console.log(error)
    })
  }