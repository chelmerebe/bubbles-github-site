// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhlHsPyfHQKGF8YYythd1YIfL2y-2XUxs",
  authDomain: "bubbles-fce69.firebaseapp.com",
  projectId: "bubbles-fce69",
  storageBucket: "bubbles-fce69.appspot.com",
  messagingSenderId: "608006490317",
  appId: "1:608006490317:web:0c9fec0aa64bf608984184",
  measurementId: "G-JRC39N6CC3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
