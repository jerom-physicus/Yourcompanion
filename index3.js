import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref,push,onValue, remove,set, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBofwhquW437EuGRfL7z5yXLz4zgPxBaIg",
  authDomain: "your-companion-73a01.firebaseapp.com",
  projectId: "your-companion-73a01",
  storageBucket: "your-companion-73a01.appspot.com",
  messagingSenderId: "686996366341",
  appId: "1:686996366341:web:d7588e31b423b52323e86c",
  measurementId: "G-KXXHY5V128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getDatabase(app);


let username = localStorage.getItem('username')

let title = localStorage.getItem('title')
document.getElementById('title').innerHTML = title


document.getElementById('delete').addEventListener('click',function(){
    console.log('hello')
    remove(ref(db,"user"+username+`/${title}/`))
    setTimeout(() => {
        window.location.href = 'index2.html'

      }, 500);
  })
