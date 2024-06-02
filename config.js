// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpUcZ8GThlSj8EbQizaI3xy3Ar7nwHbwE",
  authDomain: "fir-6e7d4.firebaseapp.com",
  projectId: "fir-6e7d4",
  storageBucket: "fir-6e7d4.appspot.com",
  messagingSenderId: "553947671062",
  appId: "1:553947671062:web:4fe4a258f13fa86b0fa337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auto xac thuc cho app
export const auth = getAuth(app);