// Sidenav Initialization

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC4OO4NkJ_VB3lY3Qqu72FhwO2jOmCiGvs",
    authDomain: "e-sales-arkanotest.firebaseapp.com",
    databaseURL: "https://e-sales-arkanotest.firebaseio.com",
    projectId: "e-sales-arkanotest",
    storageBucket: "e-sales-arkanotest.appspot.com",
    messagingSenderId: "974980130042"
});

//Inicializa una instancia de Cloud Firestore
var db = firebase.firestore();

function guardar(){
    let compras = document.getElementById("nuevas-compras").value;
    let incremento = document.getElementById("incremento-compras").value;
    let usuarios = document.getElementById("nuevos-usuarios").value;
    let visitas = document.getElementById("nuevas-visitas").value;
    let tiempo = new Date().toLocaleString()

    db.collection("data").add({
        nuevasCompras: compras,
        incrementoCompras: incremento,
        nuevosUsuarios: usuarios,
        nuevasVisitas: visitas,
        fecha: tiempo
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("nuevas-compras").value = "";
        document.getElementById("incremento-compras").value = "";
        document.getElementById("nuevos-usuarios").value = "";
        document.getElementById("nuevas-visitas").value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Leer documentos
let dashboardData = document.getElementById("dashboard");
db.collection("data").get().then((querySnapshot) => {
    dashboardData.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        dashboardData.innerHTML += `
        <div class="col s12 m6 l3">
        <div class="first-field">
                <h3 id="first-field-value">${doc.data().nuevasCompras} </h3>
                <h6>Nuevas Compras</h6>
                <h6>${doc.data().fecha}</h6>
                <div class="info-container">
                <a class="info" href="#!">Más Info<i class="material-icons">add_circle</i></a>
            </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
        <div class="second-field">
                <h3 id="second-field-value"> ${doc.data().incrementoCompras } %</h3>
                <h6>Incremento de compras</h6>
                <h6>${doc.data().fecha}</h6>
                <div class="info-container">
                <a class="info" href="#!">Más Info<i class="material-icons">add_circle</i></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
        <div class="third-field">
                <h3 id="third-field-value"> ${doc.data().nuevosUsuarios}</h3>
                <h6>Nuevos usuarios</h6>
                <h6>${doc.data().fecha}</h6>
                <div class="info-container">
                <a class="info" href="#!">Más Info<i class="material-icons">add_circle</i></a>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
        <div class="fourth-field">
                <h3 id="fourth-field-value"> ${doc.data().nuevasVisitas}</h3>
                <h6>Nuevas Visitas</h6>
                <h6>${doc.data().fecha}</h6>
                <div class="info-container">
                <a class="info" href="#!">Más Info<i class="material-icons">add_circle</i></a>
                </div>
            </div>
         </div>
        `
    });
});



 


//widget clima

