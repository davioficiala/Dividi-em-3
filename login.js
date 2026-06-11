// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Auth
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdirRN9nHaekNUjM3upyPTSBRVollrlMI",
  authDomain: "deus-fiel-7a2cc.firebaseapp.com",
  projectId: "deus-fiel-7a2cc",
  storageBucket: "deus-fiel-7a2cc.firebasestorage.app",
  messagingSenderId: "746071893459",
  appId: "1:746071893459:web:c7a31b6e8ad49709187b26"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

document.getElementById("btnLogin").addEventListener("click", async () => {

  try {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    await signInWithEmailAndPassword(
      auth,
      email,
      senha
    );

    document.getElementById("statusAuth").innerText =
      "✅ Login realizado";

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);

  } catch (erro) {

    console.error(erro);

    document.getElementById("statusAuth").innerText =
      erro.message;

  }

});
