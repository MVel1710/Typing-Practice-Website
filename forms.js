// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqQJ21jTKKJ41PnKbvdbKyNcEu8OEtsdk",
  authDomain: "practicetyping-d550d.firebaseapp.com",
  projectId: "practicetyping-d550d",
  storageBucket: "practicetyping-d550d.appspot.com",
  messagingSenderId: "1055567757885",
  appId: "1:1055567757885:web:aaf1529d27e09b38c8a054",
  measurementId: "G-YYPK1EFNXT"
};
// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);
const auth = firebase.auth;

function signUp(){
    var email= document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createrUserWithEmailAndPassword(email.value, password.value);

    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}
function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.SignInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=> alert(e.message));
  }

function signOut(){
  auth.signOut();
  alert("Sign Out Successful");
}

