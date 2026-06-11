console.log("cadastro.js carregou");

// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
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

// Authentication
const auth = getAuth(app);

// Criar Conta
document.getElementById("btnCadastrar").addEventListener("click", async () => {

  try {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = await createUserWithEmailAndPassword(
      auth,
      email,
      senha
    );

    await updateProfile(usuario.user, {
      displayName: nome
    });

    document.getElementById("statusAuth").innerText =
      "✅ Conta criada com sucesso";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } catch (erro) {

    console.error(erro);

    document.getElementById("statusAuth").innerText =
      erro.message;

  }

});
