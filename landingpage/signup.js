
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlsMDDOHgRYnHlVGb3PMATRgcks11YXOc",
  authDomain: "review-system-c966f.firebaseapp.com",
  projectId: "review-system-c966f",
  storageBucket: "review-system-c966f.firebasestorage.app",
  messagingSenderId: "530593859046",
  appId: "1:530593859046:web:cf9d751391b3b950124227",
  measurementId: "G-HSDH4300H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)




document.getElementById("signup-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    console.log(email,pass);
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user);
        alert("signup successful")
        window.open("./login.html")
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("signup failed")
        
        // ..
    });

})