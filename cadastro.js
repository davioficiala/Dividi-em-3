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
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

// Criar Conta
document.getElementById("btnCadastrar")
.addEventListener("click", async () => {

  try {

    const nome =
      document.getElementById("nome").value;

    const email =
      document.getElementById("email").value;

    const senha =
      document.getElementById("senha").value;

    const usuario =
      await createUserWithEmailAndPassword(
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

    document.getElementById("statusAuth").innerText =
      erro.message;

  }

});
