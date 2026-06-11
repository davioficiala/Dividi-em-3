

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdirRN9nHaekNUjM3upyPTSBRVollrlMI",
  authDomain: "deus-fiel-7a2cc.firebaseapp.com",
  projectId: "deus-fiel-7a2cc",
  storageBucket: "deus-fiel-7a2cc.firebasestorage.app",
  messagingSenderId: "746071893459",
  appId: "1:746071893459:web:c7a31b6e8ad49709187b26"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/* CADASTRAR USUÁRIO */
window.cadastrar = function() {

  createUserWithEmailAndPassword(auth, "teste@gmail.com", "123456")
    .then((userCredential) => {
      console.log("Usuário criado:", userCredential.user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

};

/* LOGIN */
window.entrar = function() {

  signInWithEmailAndPassword(auth, "teste@gmail.com", "123456")
    .then((userCredential) => {
      console.log("Login realizado:", userCredential.user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

};

/* 🔥 FUNÇÃO PARA LER FIRESTORE (getDoc) */
window.carregarDados = async function () {

  const documento = await getDoc(doc(db, "teste", "usuarios"));

  if (documento.exists()) {

    document.getElementById("saldoDisponivel").innerText =
      "R$ " + documento.data().saldoDisponivel;

    document.getElementById("gastosHoje").innerText =
      "R$ " + documento.data().gastosHoje;

    document.getElementById("limiteDiario").innerText =
      "R$ " + documento.data().limiteDiario;

    document.getElementById("restanteHoje").innerText =
      "R$ " + documento.data().restanteHoje;

    console.log(documento.data());

  } else {
    console.log("Documento não encontrado");
  }
};




  carregarDados();



